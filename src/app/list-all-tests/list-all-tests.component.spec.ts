import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllTestsComponent } from './list-all-tests.component';

describe('ListAllTestsComponent', () => {
  let component: ListAllTestsComponent;
  let fixture: ComponentFixture<ListAllTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
