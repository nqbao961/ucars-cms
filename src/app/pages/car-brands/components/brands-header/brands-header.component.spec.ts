import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsHeaderComponent } from './brands-header.component';

describe('BrandsHeaderComponent', () => {
  let component: BrandsHeaderComponent;
  let fixture: ComponentFixture<BrandsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
