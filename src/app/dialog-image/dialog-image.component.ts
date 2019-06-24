import { Component, OnInit, Inject } from '@angular/core';

// DIALOGS NOT WORKING TEST
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// DIALOGS NOT WORKING TEST

import { Image } from '../image';
import { IMAGES } from '../demo-images'; // demo-questions-2 for Starting screen.

@Component({
  selector: 'app-dialog-image',
  templateUrl: './dialog-image.component.html',
  styleUrls: ['./dialog-image.component.scss']
})
export class DialogImageComponent implements OnInit {



  selectedImage: Image;
  onSelect(image: Image): void {
    this.selectedImage = image;
  }
  images = IMAGES;

  imageLibraryTab: boolean = true;
  imageLibraryTabToggle() {
    this.imageLibraryTab = !this.imageLibraryTab;
  }

  constructor(

    // // DIALOGS NOT WORKING TEST
    // private dialogRef: MatDialogRef<DialogImageComponent>,
    // @Inject(MAT_DIALOG_DATA) private data
    // // DIALOGS NOT WORKING TEST


  ) { }

  ngOnInit() {
  }

}
