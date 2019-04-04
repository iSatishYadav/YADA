import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListComponentComponent } from './to-do-list-component.component';

describe('ToDoListComponentComponent', () => {
  let component: ToDoListComponentComponent;
  let fixture: ComponentFixture<ToDoListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
