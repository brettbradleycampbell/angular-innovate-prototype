import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QUESTIONS } from '../demo-questions'; // demo-questions-2 for Starting screen.

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  selectedQuestion: Question;
  onSelect(question: Question): void {
    this.selectedQuestion = question;
  }

  questions = QUESTIONS;

  constructor() { }

  ngOnInit() {
  }

}
