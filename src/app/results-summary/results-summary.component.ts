import { Component, OnInit } from '@angular/core';
// Share Link Dialog
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogShareReportLinkComponent } from '../dialog-share-report-link/dialog-share-report-link.component';

@Component({
  selector: 'app-results-summary',
  templateUrl: './results-summary.component.html',
  styleUrls: ['./results-summary.component.scss']
})
export class ResultsSummaryComponent implements OnInit {

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
