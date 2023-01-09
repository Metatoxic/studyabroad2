import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesignupComponent } from './coursesignup.component';

describe('CoursesignupComponent', () => {
  let component: CoursesignupComponent;
  let fixture: ComponentFixture<CoursesignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
