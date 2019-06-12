import { Component, OnInit, Inject } from '@angular/core';
import { Question } from '../question';
import { QUESTIONS } from '../demo-questions'; // demo-questions-2 for Starting screen.
// Logic Dialog
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogLogicComponent } from '../dialog-logic/dialog-logic.component';
// Question Library Dialog
import { DialogLibraryComponent } from '../dialog-library/dialog-library.component';

// DIALOGS NOT WORKING TEST

// DIALOGS NOT WORKING TEST


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

  // constructor() { }

  ngOnInit() {
  }

  //
  // Add Image Dialog

  // version = VERSION;

  logicNameDialogRef: MatDialogRef<DialogLogicComponent>;
  libraryNameDialogRef: MatDialogRef<DialogLibraryComponent>;

  constructor(private dialog: MatDialog) {}

  // images = [
  //   { name: 'foo.js', content: ''},
  //   { name: 'bar.js', content: ''}
  // ];

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
  //
  //

}
