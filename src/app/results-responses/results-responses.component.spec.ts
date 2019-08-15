import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsResponsesComponent } from './results-responses.component';

describe('ResultsResponsesComponent', () => {
  let component: ResultsResponsesComponent;
  let fixture: ComponentFixture<ResultsResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsResponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
