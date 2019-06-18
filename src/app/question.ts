export class Question {
  id?: number;
  questionText?: string;
  questionGroup?: number;
  questionType?: string;
  answers?: Array<String>;
  imageThumbnails?: Array<String>;
  answerElementType?: string;
  skipLogic?: boolean;
  skipLogicDestination?: boolean;
  displayLogic?: boolean;
}
