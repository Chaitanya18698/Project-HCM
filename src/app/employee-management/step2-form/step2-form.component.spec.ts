import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2FormComponent } from './step2-form.component';

describe('Step2FormComponent', () => {
  let component: Step2FormComponent;
  let fixture: ComponentFixture<Step2FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step2FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
