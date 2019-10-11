import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogResultsFilterComponent } from './dialog-results-filter.component';

describe('DialogResultsFilterComponent', () => {
  let component: DialogResultsFilterComponent;
  let fixture: ComponentFixture<DialogResultsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogResultsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogResultsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
