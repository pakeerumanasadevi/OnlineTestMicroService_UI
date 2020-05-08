import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTesttoUserComponent } from './assign-testto-user.component';

describe('AssignTesttoUserComponent', () => {
  let component: AssignTesttoUserComponent;
  let fixture: ComponentFixture<AssignTesttoUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignTesttoUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignTesttoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
