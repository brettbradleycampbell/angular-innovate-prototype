import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogImageComponent } from '../dialog-image/dialog-image.component';

@Component({
  selector: 'app-question-settings',
  templateUrl: './question-settings.component.html',
  styleUrls: ['./question-settings.component.scss']
})
export class QuestionSettingsComponent implements OnInit {

  selected='multipleChoice';
  selected2='age';
  selected3='random';

  // constructor() { }

  ngOnInit() {
  }

  //
  // Add Image Dialog

  // version = VERSION;

  imageNameDialogRef: MatDialogRef<DialogImageComponent>;

  constructor(private dialog: MatDialog) {}

  images = [
    { name: 'foo.js', content: ''},
    { name: 'bar.js', content: ''}
  ];

  openAddImageDialog() {
    this.imageNameDialogRef = this.dialog.open(DialogImageComponent, {
      // width: '250px',
      panelClass: 'dialog-image',
      // data: {name: this.name, animal: this.animal}
    });
  }
  //
  //


}
