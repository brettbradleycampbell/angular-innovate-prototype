import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-design',
  templateUrl: './create-design.component.html',
  styleUrls: ['./create-design.component.scss']
})
export class CreateDesignComponent implements OnInit {

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
