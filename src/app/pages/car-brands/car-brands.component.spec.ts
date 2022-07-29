import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBrandsComponent } from './car-brands.component';

describe('CarBrandsComponent', () => {
  let component: CarBrandsComponent;
  let fixture: ComponentFixture<CarBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
