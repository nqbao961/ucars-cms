import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsContentComponent } from './brands-content.component';

describe('BrandsContentComponent', () => {
  let component: BrandsContentComponent;
  let fixture: ComponentFixture<BrandsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
