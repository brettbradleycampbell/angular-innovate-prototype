import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-settings',
  templateUrl: './create-settings.component.html',
  styleUrls: ['./create-settings.component.scss']
})
export class CreateSettingsComponent implements OnInit {


  selected='default';
  selected2='default2';
  selected3=true;

  constructor() { }

  ngOnInit() {
  }

}
