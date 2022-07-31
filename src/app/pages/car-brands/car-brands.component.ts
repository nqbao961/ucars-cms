import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarBrand } from 'src/app/services/models';

@Component({
  selector: 'app-car-brands',
  templateUrl: './car-brands.component.html',
  styleUrls: ['./car-brands.component.scss'],
})
export class CarBrandsComponent implements OnInit {
  brands: CarBrand[] = [];

  ngOnInit(): void {}

  getFetchedBrands(brands$: Observable<CarBrand[]>) {
    brands$.subscribe((brands) => (this.brands = brands));
  }

  pushNewBrand(brand: CarBrand) {
    this.brands.push(brand);
  }
}
