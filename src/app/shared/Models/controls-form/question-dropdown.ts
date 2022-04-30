import { QuestionBase } from "src/app/shared/Models/question-base";

export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
}
