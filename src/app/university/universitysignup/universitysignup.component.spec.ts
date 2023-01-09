import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitysignupComponent } from './universitysignup.component';

describe('UniversitysignupComponent', () => {
  let component: UniversitysignupComponent;
  let fixture: ComponentFixture<UniversitysignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitysignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversitysignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
