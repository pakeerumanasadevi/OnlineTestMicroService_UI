import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtAllQuestionsComponent } from './listt-all-questions.component';

describe('ListtAllQuestionsComponent', () => {
  let component: ListtAllQuestionsComponent;
  let fixture: ComponentFixture<ListtAllQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtAllQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtAllQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
