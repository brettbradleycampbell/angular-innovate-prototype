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


  selected = '1';
  selected2 = 'yes';
  selected3 = '3';
  dselected = '1';
  dselected2 = ['1', '2'];
  dselected3 = 'yes';
  displayhide = 'display';
  andor = 'and';
  dselected5 = '1';
  dselected6 = ['a', 'b'];
  dselected7 = 'yes';

  constructor(
    // // DIALOGS NOT WORKING TEST
    // private dialogRef: MatDialogRef<DialogLogicComponent>,
    // @Inject(MAT_DIALOG_DATA) private data
    // // DIALOGS NOT WORKING TEST

  ) { }

  ngOnInit() {
  }

}
