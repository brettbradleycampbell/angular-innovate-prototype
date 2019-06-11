import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLogicComponent } from './dialog-logic.component';

describe('DialogLogicComponent', () => {
  let component: DialogLogicComponent;
  let fixture: ComponentFixture<DialogLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
