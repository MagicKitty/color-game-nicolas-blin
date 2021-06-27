import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  userServiceSubscription: Subscription;
  errorMessage: string;

  constructor(private userService: UserService, private router: Router) {
    this.userServiceSubscription = new Subscription();
    this.errorMessage = '';
  }

  ngOnInit(): void {}

  logout(): void {
    this.userService.logout().subscribe(
      (next) => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  ngOnDestroy(): void {
    this.userServiceSubscription.unsubscribe();
  }
}
