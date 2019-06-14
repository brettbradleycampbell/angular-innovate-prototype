import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogImageComponent } from '../dialog-image/dialog-image.component';
//
//
//
import {FormControl} from '@angular/forms';
//
//
//
import { QuestionType } from '../question-type';
import { QUESTIONTYPES } from '../question-types'; // demo-questions-2 for Starting screen.
import { QuestionTypeComponent } from '../question-type/question-type.component';



@Component({
  selector: 'app-question-settings',
  templateUrl: './question-settings.component.html',
  styleUrls: ['./question-settings.component.scss']
})
export class QuestionSettingsComponent implements OnInit {

  qType='Multiple Choice';
  //
  selected3='random';
  // constructor() { }

  ngOnInit() {
  }

  // ADD IMAGE DIALOG
  // version = VERSION;
  imageNameDialogRef: MatDialogRef<DialogImageComponent>;
  constructor(private dialog: MatDialog) {}
  openAddImageDialog() {
    this.imageNameDialogRef = this.dialog.open(DialogImageComponent, {
      panelClass: 'dialog-image',
    });
  }
  //
  // questionType = new FormControl();
  questionTypes = QUESTIONTYPES;

  // TOGGLE SETTINGS
  presetAnswersToggle: boolean = true;
  presetAnswers='age';
  scaleAnswerType='stars'
  multipleAnswersToggle: boolean = true;
  answerLimit = 'unlimited';
  sortOrderToggle: boolean = true;
  sortOrder = 'random';
  videoURL: boolean = true;
  clickEvent(){this.videoURL = !this.videoURL;}
  answerImagesToggle: boolean = true;
  answerImageLabelsToggle: boolean = true;
  // answerImageLabels = 'public';
  scaleLabelsToggle: boolean = true;
  textFieldType = 'text';
  //

}
