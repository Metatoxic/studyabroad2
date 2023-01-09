import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreetypeComponent } from './degreetype.component';

describe('DegreetypeComponent', () => {
  let component: DegreetypeComponent;
  let fixture: ComponentFixture<DegreetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreetypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegreetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
