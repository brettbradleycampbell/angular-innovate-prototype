import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsReportNewComponent } from './results-report-new.component';

describe('ResultsReportNewComponent', () => {
  let component: ResultsReportNewComponent;
  let fixture: ComponentFixture<ResultsReportNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsReportNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsReportNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
