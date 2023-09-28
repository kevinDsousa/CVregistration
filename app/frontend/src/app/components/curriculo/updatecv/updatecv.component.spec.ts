import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecvComponent } from './updatecv.component';

describe('UpdatecvComponent', () => {
  let component: UpdatecvComponent;
  let fixture: ComponentFixture<UpdatecvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecvComponent]
    });
    fixture = TestBed.createComponent(UpdatecvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
