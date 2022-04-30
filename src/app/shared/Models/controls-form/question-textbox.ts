import { QuestionBase } from "src/app/shared/Models/question-base";

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}
