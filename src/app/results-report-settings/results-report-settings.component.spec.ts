import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsReportSettingsComponent } from './results-report-settings.component';

describe('ResultsReportSettingsComponent', () => {
  let component: ResultsReportSettingsComponent;
  let fixture: ComponentFixture<ResultsReportSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsReportSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsReportSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
