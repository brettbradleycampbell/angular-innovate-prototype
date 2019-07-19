import { Component, OnInit } from '@angular/core';
import { SurveyQuestion } from '../survey-question';
import { SURVEYQUESTIONS } from '../demo-survey-questions';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.scss']
})
export class SurveyQuestionsComponent implements OnInit {

  // selectedSurveyQuestion: SurveyQuestion;
  // onSelect(surveyquestion: SurveyQuestion): void {
  //   this.selectedSurveyQuestion = surveyquestion;
  // }

  // selectedSurveyQuestionAnswer: SurveyQuestion;
  // onSelect(surveyquestion: SurveyQuestion): void {
  //   this.selectedSurveyQuestionAnswer = surveyquestion;
  // }

  //
  rankAnswers = [
    'Apple',
    'Microsoft',
    'Google',
    'Amazon',
    'Facebook',
    'Twitter',
    'Walmart',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.rankAnswers, event.previousIndex, event.currentIndex);
  }
  //

  constructor() { }

  surveyquestions = SURVEYQUESTIONS;

  ngOnInit() {
  }

}
