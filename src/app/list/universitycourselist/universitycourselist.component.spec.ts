import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitycourselistComponent } from './universitycourselist.component';

describe('UniversitycourselistComponent', () => {
  let component: UniversitycourselistComponent;
  let fixture: ComponentFixture<UniversitycourselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitycourselistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversitycourselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
