import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  hideLogic: boolean = false;
  hidePreview: boolean = false;
  toggleLogicButton() {this.hideLogic = !this.hideLogic;}
  togglePreviewButton() {this.hidePreview = !this.hidePreview;}

  constructor() { }

  ngOnInit() {
  }

}
