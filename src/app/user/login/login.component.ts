import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authenticationForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  userServiceSubscription: Subscription;
  authenticationError: boolean;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.authenticationForm = this.fb.group({
      email: [
        'john@doe',
        [
          Validators.compose([
            Validators.email,
            Validators.required,
            Validators.minLength(6),
          ]),
        ],
      ],
      password: ['abcde', [Validators.required, Validators.minLength(5)]],
    });

    this.email = this.authenticationForm.controls['email'];
    this.password = this.authenticationForm.controls['password'];

    this.userServiceSubscription = new Subscription();
    this.authenticationError = false;
  }

  ngOnInit(): void {}

  authenticate(authenticationForm: FormGroup): void {
    this.userServiceSubscription = this.userService
      .login(authenticationForm.value)
      .subscribe(
        (next) => {
          this.router.navigate(['/']);
          this.authenticationError = false;
        },
        (error) => {
          this.authenticationError = true;
        }
      );
  }

  ngOnDestroy() {
    this.userServiceSubscription.unsubscribe();
  }
}
