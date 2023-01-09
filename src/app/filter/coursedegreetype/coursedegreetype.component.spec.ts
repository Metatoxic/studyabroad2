import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedegreetypeComponent } from './coursedegreetype.component';

describe('CoursedegreetypeComponent', () => {
  let component: CoursedegreetypeComponent;
  let fixture: ComponentFixture<CoursedegreetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursedegreetypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursedegreetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
