import { Component, OnInit } from '@angular/core';

import { Question } from '../question';
import { QUESTIONS } from '../demo-questions-minus-page-breaks'; // -minus-page-breaks to remove page breaks in Reports. 

// QUESTION TYPES
import { QuestionType } from '../question-type';
import { QUESTIONTYPES } from '../question-types'; // demo-questions-2 for Starting screen.
import { QuestionTypeComponent } from '../question-type/question-type.component';



@Component({
  selector: 'app-results-report-new',
  templateUrl: './results-report-new.component.html',
  styleUrls: ['./results-report-new.component.scss']
})
export class ResultsReportNewComponent implements OnInit {

  selectedQuestion: Question;
  onSelect(question: Question): void {
    this.selectedQuestion = question;
  }
  questions = QUESTIONS;
  questionTypes = QUESTIONTYPES;


  constructor() { }

  ngOnInit() {
  }

}
