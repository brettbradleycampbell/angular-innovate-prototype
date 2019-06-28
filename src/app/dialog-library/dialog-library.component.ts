import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-library',
  templateUrl: './dialog-library.component.html',
  styleUrls: ['./dialog-library.component.scss']
})
export class DialogLibraryComponent implements OnInit {

  selected = 'all';

  constructor() { }

  ngOnInit() {
  }

}
