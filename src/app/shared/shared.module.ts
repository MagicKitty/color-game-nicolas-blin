import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { LoadingComponent } from './loading/loading.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    FormFieldComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    FormFieldComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
