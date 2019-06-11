import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-design',
  templateUrl: './create-design.component.html',
  styleUrls: ['./create-design.component.scss']
})
export class CreateDesignComponent implements OnInit {

  selected2='roboto';
  selected4='normal';
  selected5='none';

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
