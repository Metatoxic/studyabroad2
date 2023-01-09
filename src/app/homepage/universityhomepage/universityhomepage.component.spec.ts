import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityhomepageComponent } from './universityhomepage.component';

describe('UniversityhomepageComponent', () => {
  let component: UniversityhomepageComponent;
  let fixture: ComponentFixture<UniversityhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityhomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
