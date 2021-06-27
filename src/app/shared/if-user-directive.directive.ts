import { Directive, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user/models/user';
import { UserService } from '../user/user.service';

@Directive({
  selector: '[ifUser]',
})
export class IfUserDirective {
  userServiceSubscription: Subscription;

  constructor(protected userService: UserService, protected el: ElementRef) {
    this.userServiceSubscription = this.userService.user$.subscribe((user) => {
      this.update(user);
    });
  }

  ngOnInit() {}

  protected update(user: User | null): void {
    user
      ? this.el.nativeElement.classList.add('d-none')
      : this.el.nativeElement.classList.remove('d-none');
  }

  ngOnDestroy(): void {
    this.userServiceSubscription.unsubscribe();
  }
}
