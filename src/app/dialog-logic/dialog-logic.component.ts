import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-logic',
  templateUrl: './dialog-logic.component.html',
  styleUrls: ['./dialog-logic.component.scss']
})
export class DialogLogicComponent implements OnInit {


  selected = '1';
  selected2 = 'yes';
  selected3 = '3';
  dselected = '1';
  dselected2 = '1';
  dselected3 = 'yes';
  displayhide = 'display';
  displayhide2 = 'and';
  dselected5 = '1';
  dselected6 = '1';
  dselected7 = 'yes';

  constructor() { }

  ngOnInit() {
  }

}
