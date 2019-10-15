import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactChoiceComponent } from './contact-choice.component';

describe('ContactChoiceComponent', () => {
  let component: ContactChoiceComponent;
  let fixture: ComponentFixture<ContactChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
