import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercvComponent } from './registercv.component';

describe('RegistercvComponent', () => {
  let component: RegistercvComponent;
  let fixture: ComponentFixture<RegistercvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistercvComponent]
    });
    fixture = TestBed.createComponent(RegistercvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
