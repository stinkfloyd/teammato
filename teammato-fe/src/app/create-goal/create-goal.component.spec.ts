import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGoalComponent } from './create-goal.component';

describe('CreateGoalComponent', () => {
  let component: CreateGoalComponent;
  let fixture: ComponentFixture<CreateGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
