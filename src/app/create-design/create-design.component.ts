import { Component, OnInit } from '@angular/core';

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
  constructor() {
  }
  onClick($event) {
    this.menuOpen = !this.menuOpen;
  }
  //

  ngOnInit() {
  }

}
