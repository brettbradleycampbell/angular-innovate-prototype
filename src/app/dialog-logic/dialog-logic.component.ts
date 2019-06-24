import { Component, OnInit, Inject } from '@angular/core';

// DIALOGS NOT WORKING TEST
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// DIALOGS NOT WORKING TEST


@Component({
  selector: 'app-dialog-logic',
  templateUrl: './dialog-logic.component.html',
  styleUrls: ['./dialog-logic.component.scss']
})
export class DialogLogicComponent implements OnInit {


  skipAnswers = 'a';
  skipOperators = '1';
  skipDestinations = '1';
  textEntryOperators = '1';
  textEntryDestinations = '1';
  scaleOperators = '1';
  scaleDestinations = '1';
  rankAnswerChoices = '1';
  rankOperators = '1';
  rankDestinations = '1';
  //
  displayhide = 'display';
  displayQuestionsList = '1';
  displayAnswersList = '1';
  displayOperators = '1';
  andor1 = 'and';
  displayQuestionsList2 = '1';
  displayAnswersList2 = '1';
  displayOperators2 = '1';

  // selected = '1';
  // selected2 = 'yes';
  // selected3 = '3';
  // dselected = '1';
  // dselected2 = ['1', '2'];
  // dselected3 = 'yes';
  // displayhide = 'display';
  // andor = 'and';
  // dselected5 = '1';
  // dselected6 = ['a', 'b'];
  // dselected7 = 'yes';
  // textEntryOperators = '1';
  // scaleOperators = '1';
  // rankAnswerChoices = '1';
  // rankOperators = '1';
  // rankDestination = '1';

  constructor(
    // // DIALOGS NOT WORKING TEST
    // private dialogRef: MatDialogRef<DialogLogicComponent>,
    // @Inject(MAT_DIALOG_DATA) private data
    // // DIALOGS NOT WORKING TEST

  ) { }

  ngOnInit() {
  }

}
