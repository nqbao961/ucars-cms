import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-brands-header',
  templateUrl: './brands-header.component.html',
  styleUrls: ['./brands-header.component.scss'],
})
export class BrandsHeaderComponent implements OnInit {
  isShowDropdown = false;

  constructor(private formBuilder: FormBuilder) {}

  searchForm: FormGroup = this.formBuilder.group({
    search: [''],
  });

  ngOnInit() {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((selectedValue) => {
        console.log(selectedValue);
      });
  }

  get search() {
    return this.searchForm.get('search')!;
  }

  toggleDropdown() {
    this.isShowDropdown = !this.isShowDropdown;
  }
}
