import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShareReportLinkComponent } from './dialog-share-report-link.component';

describe('DialogShareReportLinkComponent', () => {
  let component: DialogShareReportLinkComponent;
  let fixture: ComponentFixture<DialogShareReportLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogShareReportLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogShareReportLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
