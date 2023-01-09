import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitylistComponent } from './universitylist.component';

describe('UniversitylistComponent', () => {
  let component: UniversitylistComponent;
  let fixture: ComponentFixture<UniversitylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversitylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
