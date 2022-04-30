import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormQuestionComponent} from './form-question/form-question.component';
import { FormComponent } from './form.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FormComponent,
    FormQuestionComponent
  ],
  exports:[
    FormComponent,
    FormQuestionComponent
  ]
})
export class FormModule { }
