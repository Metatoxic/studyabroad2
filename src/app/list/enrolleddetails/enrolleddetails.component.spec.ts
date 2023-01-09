import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleddetailsComponent } from './enrolleddetails.component';

describe('EnrolleddetailsComponent', () => {
  let component: EnrolleddetailsComponent;
  let fixture: ComponentFixture<EnrolleddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolleddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrolleddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
