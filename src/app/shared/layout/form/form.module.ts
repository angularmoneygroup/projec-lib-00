import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormQuestionComponentComponent } from './form-question-component/form-question-component.component';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule
  ],
  declarations: [FormComponent,FormQuestionComponentComponent]
})
export class FormModule { }
