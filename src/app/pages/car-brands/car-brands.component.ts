import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-car-brands',
  templateUrl: './car-brands.component.html',
  styleUrls: ['./car-brands.component.scss'],
})
export class CarBrandsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  customInputForm: FormGroup = this.formBuilder.group({
    email: [''],
  });

  ngOnInit() {
    this.email.valueChanges
      .pipe(debounceTime(300))
      .subscribe((selectedValue) => {
        console.log(selectedValue);
      });
  }

  get email() {
    return this.customInputForm.get('email')!;
  }

  get emailErrors() {
    const errorList = [];
    if (this.email.touched) {
      this.email.hasError('required') && errorList.push('Email is required!');
      this.email.hasError('email') && errorList.push('Email is invalid!');
      this.email.hasError('minlength') && errorList.push('minLength is 3!');
    }

    return errorList;
  }
}
