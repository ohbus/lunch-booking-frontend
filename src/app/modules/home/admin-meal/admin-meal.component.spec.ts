import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMealComponent } from './admin-meal.component';

describe('AdminMealComponent', () => {
  let component: AdminMealComponent;
  let fixture: ComponentFixture<AdminMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminMealComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
