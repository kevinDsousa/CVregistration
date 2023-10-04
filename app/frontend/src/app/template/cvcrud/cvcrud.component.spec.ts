import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvcrudComponent } from './cvcrud.component';

describe('CvcrudComponent', () => {
  let component: CvcrudComponent;
  let fixture: ComponentFixture<CvcrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvcrudComponent]
    });
    fixture = TestBed.createComponent(CvcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
