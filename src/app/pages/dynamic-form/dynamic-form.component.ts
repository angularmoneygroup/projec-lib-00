import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from 'src/app/core/Models/question-base';
import { QuestionService } from 'src/app/core/service/question.service';


@Component({
  selector: 'app-dynamic-form',
  template: ` <div>
          <h2>Job Application for Heroes</h2>
          <app-form [questions]="questions$ | async"></app-form>
        </div>
          `,
  providers: [QuestionService]
})
export class DynamicFormComponent implements OnInit {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
   }

  ngOnInit() {
  }

}
