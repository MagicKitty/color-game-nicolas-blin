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

  loading: boolean;

  constructor(private userService: UserService, private router: Router) {
    this.userServiceSubscription = new Subscription();
    this.errorMessage = '';
    this.loading = false;
  }

  ngOnInit(): void {}

  logout(): void {
    this.loading = true;
    this.userService.logout().subscribe(
      (next) => {
        this.loading = false;
        this.router.navigate(['/']);
      },
      (error) => {
        this.loading = false;
        this.errorMessage = error;
      }
    );
  }

  ngOnDestroy(): void {
    this.userServiceSubscription.unsubscribe();
  }
}
