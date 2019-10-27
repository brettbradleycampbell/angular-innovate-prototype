import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogReportSettingsComponent } from './dialog-report-settings.component';

describe('DialogReportSettingsComponent', () => {
  let component: DialogReportSettingsComponent;
  let fixture: ComponentFixture<DialogReportSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogReportSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogReportSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
