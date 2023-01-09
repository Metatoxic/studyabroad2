import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Universitycourselist2Component } from './universitycourselist2.component';

describe('Universitycourselist2Component', () => {
  let component: Universitycourselist2Component;
  let fixture: ComponentFixture<Universitycourselist2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Universitycourselist2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Universitycourselist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
