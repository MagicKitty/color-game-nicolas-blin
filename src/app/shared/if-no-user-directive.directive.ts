import { Directive, ElementRef } from '@angular/core';
import { User } from '../user/models/user';
import { UserService } from '../user/user.service';
import { IfUserDirective } from './if-user-directive.directive';

@Directive({
  selector: '[ifNoUser]',
})
export class IfNoUserDirective extends IfUserDirective {
  constructor(userService: UserService, el: ElementRef) {
    super(userService, el);
  }

  protected update(user: User | null): void {
    user
      ? this.el.nativeElement.classList.remove('d-none')
      : this.el.nativeElement.classList.add('d-none');
  }
}
