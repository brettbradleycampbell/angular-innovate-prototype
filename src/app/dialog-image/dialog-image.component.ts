import { Component, OnInit, Inject } from '@angular/core';

// DIALOGS NOT WORKING TEST
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// DIALOGS NOT WORKING TEST

@Component({
  selector: 'app-dialog-image',
  templateUrl: './dialog-image.component.html',
  styleUrls: ['./dialog-image.component.scss']
})
export class DialogImageComponent implements OnInit {

  constructor(

    // // DIALOGS NOT WORKING TEST
    // private dialogRef: MatDialogRef<DialogImageComponent>,
    // @Inject(MAT_DIALOG_DATA) private data
    // // DIALOGS NOT WORKING TEST


  ) { }

  ngOnInit() {
  }

}
