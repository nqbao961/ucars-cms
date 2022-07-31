import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandDetailsContentComponent } from './brand-details-content.component';

describe('BrandDetailsContentComponent', () => {
  let component: BrandDetailsContentComponent;
  let fixture: ComponentFixture<BrandDetailsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandDetailsContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
