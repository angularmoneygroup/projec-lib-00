import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/app/core/Models/question-base';
import { QuestionControlService } from 'src/app/core/service/question-control.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [ QuestionControlService ]
})
export class FormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';


  constructor(private qcs: QuestionControlService) { }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
