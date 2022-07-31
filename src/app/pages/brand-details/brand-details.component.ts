import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarBrandService } from 'src/app/services/brand.service';
import { CarBrand } from 'src/app/services/models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss'],
})
export class BrandDetailsComponent implements OnInit {
  brand: CarBrand | undefined = undefined;
  mode: 'edit' | 'readonly' | 'add' = 'readonly';

  constructor(
    private carBrandService: CarBrandService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('brandId');
      if (id) {
        this.getBrand(parseInt(id));
      }
    });
  }

  getBrand(id: number): void {
    this.carBrandService
      .getCarBrand(id)
      .subscribe((brand) => (this.brand = brand));
  }

  navigateToCarBrands() {
    this.router.navigate(['car-brands']);
  }

  updateBrand(brand: CarBrand): void {
    this.mode = 'edit';
    this.carBrandService.updateCarBrand(brand).subscribe(() => {
      this.mode = 'readonly';
      this.snackBar.open('Update successful!', '', {
        duration: 1000,
      });
    });
  }
}
