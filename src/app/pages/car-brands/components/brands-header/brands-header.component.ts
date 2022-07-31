import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, Observable } from 'rxjs';
import { CarBrandService } from 'src/app/services/brand.service';
import { CarBrand } from 'src/app/services/models';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    public dialog: MatDialog,
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

  openDialog() {
    this.dialog.open(DialogAddBrand, {
      data: {
        onAddBrand: this.onAddBrand,
      },
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}

export interface DialogData {
  onAddBrand: EventEmitter<CarBrand>;
}

@Component({
  selector: 'dialog-add-brand',
  templateUrl: './dialog-add-brand.html',
  styleUrls: ['./dialog-add-brand.scss'],
})
export class DialogAddBrand {
  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private carBrandService: CarBrandService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  add(brandObj: CarBrand): void {
    this.carBrandService.addCarBrand(brandObj).subscribe((brand) => {
      this.data.onAddBrand.emit(brand);
      this.snackBar.open('Create successful!', '', {
        duration: 1000,
      });
      this.closeDialog();
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
