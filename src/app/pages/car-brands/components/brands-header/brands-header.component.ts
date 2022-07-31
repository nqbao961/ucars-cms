import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, Observable } from 'rxjs';
import { CarBrandService } from 'src/app/services/brand.service';
import { CarBrand } from 'src/app/services/models';

@Component({
  selector: 'app-brands-header',
  templateUrl: './brands-header.component.html',
  styleUrls: ['./brands-header.component.scss'],
})
export class BrandsHeaderComponent implements OnInit {
  brands$!: Observable<CarBrand[]>;
  isShowDropdown = false;

  @Output() onFetchBrands = new EventEmitter<Observable<CarBrand[]>>();
  @Output() onAddBrand = new EventEmitter<CarBrand>();

  constructor(
    private formBuilder: FormBuilder,
    private carBrandService: CarBrandService
  ) {}

  searchForm: FormGroup = this.formBuilder.group({
    search: [''],
  });

  ngOnInit() {
    this.brands$ = this.carBrandService.getCarBrands();
    this.onFetchBrands.emit(this.brands$);

    this.search.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.brands$ = this.carBrandService.searchCarBrands(value);
      this.onFetchBrands.emit(this.brands$);
      this.brands$.subscribe((brands) => console.log(brands));
    });
  }

  get search() {
    return this.searchForm.get('search')!;
  }

  toggleDropdown() {
    this.isShowDropdown = !this.isShowDropdown;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.carBrandService
      .addCarBrand({ name } as CarBrand)
      .subscribe((brand) => {
        this.onAddBrand.emit(brand);
      });
  }
}
