import { Component, OnInit } from '@angular/core';

import { Question } from '../question';
import { QUESTIONS } from '../demo-questions-minus-page-breaks'; // -minus-page-breaks to remove page breaks in Reports.

// QUESTION TYPES
import { QuestionType } from '../question-type';
import { QUESTIONTYPES } from '../question-types'; // demo-questions-2 for Starting screen.
import { QuestionTypeComponent } from '../question-type/question-type.component';

// Share Link Dialog
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogShareReportLinkComponent } from '../dialog-share-report-link/dialog-share-report-link.component';
import { DialogResultsFilterComponent } from '../dialog-results-filter/dialog-results-filter.component';
import { DialogReportSettingsComponent } from '../dialog-report-settings/dialog-report-settings.component';


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

  shareReportLinkNameDialogRef: MatDialogRef<DialogShareReportLinkComponent>;
  openShareLinkDialog() {
    this.shareReportLinkNameDialogRef = this.dialog.open(DialogShareReportLinkComponent, {
      // width: '250px',
      panelClass: 'dialog-share-report-link',
      // data: {name: this.name, animal: this.animal}
    });
  }
  resultsFilterNameDialogRef: MatDialogRef<DialogResultsFilterComponent>;
  openResultsFilterDialog() {
    this.resultsFilterNameDialogRef = this.dialog.open(DialogResultsFilterComponent, {
      // width: '250px',
      panelClass: 'dialog-results-filter',
      // data: {name: this.name, animal: this.animal}
    });
  }
  reportSettingsNameDialogRef: MatDialogRef<DialogReportSettingsComponent>;
  openReportSettingsDialog() {
    this.reportSettingsNameDialogRef = this.dialog.open(DialogReportSettingsComponent, {
      // width: '250px',
      panelClass: 'dialog-report-settings',
      // data: {name: this.name, animal: this.animal}
    });
  }


  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
