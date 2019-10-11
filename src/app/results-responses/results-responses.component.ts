import { Component, OnInit } from '@angular/core';
// Share Link Dialog
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogShareReportLinkComponent } from '../dialog-share-report-link/dialog-share-report-link.component';

@Component({
  selector: 'app-results-responses',
  templateUrl: './results-responses.component.html',
  styleUrls: ['./results-responses.component.scss']
})
export class ResultsResponsesComponent implements OnInit {

  shareReportLinkNameDialogRef: MatDialogRef<DialogShareReportLinkComponent>;
  openShareLinkDialog() {
    this.shareReportLinkNameDialogRef = this.dialog.open(DialogShareReportLinkComponent, {
      // width: '250px',
      panelClass: 'dialog-share-report-link',
      // data: {name: this.name, animal: this.animal}
    });
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
