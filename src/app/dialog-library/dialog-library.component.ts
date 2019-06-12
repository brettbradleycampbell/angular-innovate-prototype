import { Component, OnInit, Inject } from '@angular/core';


// DIALOGS NOT WORKING TEST
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// DIALOGS NOT WORKING TEST


@Component({
  selector: 'app-dialog-library',
  templateUrl: './dialog-library.component.html',
  styleUrls: ['./dialog-library.component.scss']
})
export class DialogLibraryComponent implements OnInit {

  selected = 'all';

  constructor(

    // // DIALOGS NOT WORKING TEST
    // private dialogRef: MatDialogRef<DialogLibraryComponent>,
    // @Inject(MAT_DIALOG_DATA) private data
    // // DIALOGS NOT WORKING TEST

  ) { }

  ngOnInit() {
  }

}
