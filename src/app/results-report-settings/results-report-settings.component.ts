import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QUESTIONS } from '../demo-questions-minus-page-breaks'; // -minus-page-breaks to remove page breaks in Reports.

import { FormsModule } from '@angular/forms';
import {MatButtonToggleChange} from '@angular/material';


@Component({
  selector: 'app-results-report-settings',
  templateUrl: './results-report-settings.component.html',
  styleUrls: ['./results-report-settings.component.scss']
})
export class ResultsReportSettingsComponent implements OnInit {

  questions = QUESTIONS;

  dataSource='1';
  breakout='2';
  sortOrder='Default';
  chartType='bar_chart';

  constructor() { }

  ngOnInit() {
  }

}
