import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledlistComponent } from './enrolledlist.component';

describe('EnrolledlistComponent', () => {
  let component: EnrolledlistComponent;
  let fixture: ComponentFixture<EnrolledlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolledlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrolledlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
