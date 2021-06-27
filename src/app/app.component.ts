import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user/models/user';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Color Game';
  isUserConnect: boolean;
  userName: string;
  user$: Observable<User | null>;

  constructor(private userService: UserService) {
    this.isUserConnect = false;
    this.userName = '';
    this.user$ = this.userService.user$;
  }
}
