import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { QuestionType } from '../question-type';
import { QUESTIONTYPES } from '../question-types'; // demo-questions-2 for Starting screen.

@Component({
  selector: 'app-question-type',
  templateUrl: './question-type.component.html',
  styleUrls: ['./question-type.component.scss']
})

export class QuestionTypeComponent implements OnInit {

  questionTypes = QUESTIONTYPES;

  constructor() { }

  ngOnInit() {
  }

}
