import { Component, OnInit } from '@angular/core';

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
