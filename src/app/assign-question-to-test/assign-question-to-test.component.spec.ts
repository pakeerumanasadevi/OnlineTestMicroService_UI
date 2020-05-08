import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignQuestionToTestComponent } from './assign-question-to-test.component';

describe('AssignQuestionToTestComponent', () => {
  let component: AssignQuestionToTestComponent;
  let fixture: ComponentFixture<AssignQuestionToTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignQuestionToTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignQuestionToTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
