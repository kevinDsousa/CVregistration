import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadcvComponent } from './readcv.component';

describe('ReadcvComponent', () => {
  let component: ReadcvComponent;
  let fixture: ComponentFixture<ReadcvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadcvComponent]
    });
    fixture = TestBed.createComponent(ReadcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
