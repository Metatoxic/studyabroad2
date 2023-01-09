import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarlistComponent } from './starlist.component';

describe('StarlistComponent', () => {
  let component: StarlistComponent;
  let fixture: ComponentFixture<StarlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
