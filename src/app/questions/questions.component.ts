import { Component, OnInit, Inject } from '@angular/core';
import { Question } from '../question';
import { QUESTIONS } from '../demo-questions'; // demo-questions-2 for Starting screen.
// Logic Dialog
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogLogicComponent } from '../dialog-logic/dialog-logic.component';
// Question Library Dialog
import { DialogLibraryComponent } from '../dialog-library/dialog-library.component';
// QUESTION TYPES
import { QuestionType } from '../question-type';
import { QUESTIONTYPES } from '../question-types'; // demo-questions-2 for Starting screen.
import { QuestionTypeComponent } from '../question-type/question-type.component';

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
  questionTypes = QUESTIONTYPES;
  logicNameDialogRef: MatDialogRef<DialogLogicComponent>;
  libraryNameDialogRef: MatDialogRef<DialogLibraryComponent>;
  openAddLogicDialog() {
    this.logicNameDialogRef = this.dialog.open(DialogLogicComponent, {
      // width: '250px',
      panelClass: 'dialog-logic',
      // data: {name: this.name, animal: this.animal}
    });
  }
  openLibraryDialog() {
    this.libraryNameDialogRef = this.dialog.open(DialogLibraryComponent, {
      // width: '250px',
      panelClass: 'dialog-library',
      // data: {name: this.name, animal: this.animal}
    });
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
  }


}
