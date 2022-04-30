import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { FormModule } from 'src/app/shared/layout/form/form.module';
import { DynamicFormRoutingModule } from './dynamic-form.routing.module';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormRoutingModule,
    FormModule
  ],
  declarations: [DynamicFormComponent],
  exports:[DynamicFormComponent]
})
export class DynamicFormModule { }
