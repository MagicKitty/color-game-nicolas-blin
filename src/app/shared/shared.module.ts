import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { LoadingComponent } from './loading/loading.component';
import { SharedRoutingModule } from './shared-routing.module';
import { IfUserDirective } from './if-user-directive.directive';
import { IfNoUserDirective } from './if-no-user-directive.directive';

@NgModule({
  declarations: [FormFieldComponent, LoadingComponent, IfUserDirective, IfNoUserDirective],
  imports: [CommonModule, SharedRoutingModule],
  exports: [FormFieldComponent, LoadingComponent, IfUserDirective, IfNoUserDirective],
})
export class SharedModule {}
