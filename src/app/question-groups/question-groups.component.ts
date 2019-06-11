import { Component, OnInit } from '@angular/core';
import { QuestionGroup } from '../question-group';
import { QUESTIONGROUPS } from '../demo-question-groups';

@Component({
  selector: 'app-question-groups',
  templateUrl: './question-groups.component.html',
  styleUrls: ['./question-groups.component.scss']
})
export class QuestionGroupsComponent implements OnInit {

  questionGroups = QUESTIONGROUPS;

  constructor() { }

  ngOnInit() {
  }

}
