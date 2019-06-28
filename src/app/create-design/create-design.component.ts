import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogImageComponent } from '../dialog-image/dialog-image.component';

@Component({
  selector: 'app-create-design',
  templateUrl: './create-design.component.html',
  styleUrls: ['./create-design.component.scss']
})
export class CreateDesignComponent implements OnInit {

  fontFamily='roboto';
  fontSize='normal';
  transitions='none';
  backButtonToggle: boolean = true;
  footerTextToggle: boolean = true;
  // Show/hide Customize tab hack
  menuOpen = false;
  logoImage: boolean = true;
  logoImagePosition = 'top';
  backgroundImage: boolean = true;
  backgroundImagePosition = 'cover';
  addLogoImage(){
    this.logoImage = !this.logoImage;
  }
  addBackgroundImage() {
    this.backgroundImage = !this.backgroundImage;
  }
  imageNameDialogRef: MatDialogRef<DialogImageComponent>;
  openAddImageDialog() {
    this.imageNameDialogRef = this.dialog.open(DialogImageComponent, {
      panelClass: 'dialog-image',
    });
  }
  onClick($event) {
    this.menuOpen = !this.menuOpen;
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
  }

}
