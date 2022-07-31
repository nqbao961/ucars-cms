import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarBrand } from 'src/app/services/models';

@Component({
  selector: 'app-brand-details-content',
  templateUrl: './brand-details-content.component.html',
  styleUrls: ['./brand-details-content.component.scss'],
})
export class BrandDetailsContentComponent implements OnInit {
  @Input() brand: CarBrand | undefined = undefined;
  @Input() mode: 'edit' | 'readonly' | 'add' = 'readonly';
  @Output() onAddBrand = new EventEmitter<CarBrand>();
  @Output() onEditBrand = new EventEmitter<CarBrand>();
  @Output() onClose = new EventEmitter();

  isShowUploadError = false;
  isShowDropdown = false;
  currentBrand: Omit<CarBrand, 'id'> = {
    logo: '',
    name: '',
    status: true,
    updateAt: new Date(),
  };

  constructor(private formBuilder: FormBuilder) {}

  detailsForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
  });

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['brand']?.currentValue) {
      this.name.setValue(this.brand!.name);
      this.description.setValue(this.brand!.description || '');
      this.currentBrand.status = this.brand!.status;
      this.currentBrand.logo = this.brand!.logo;
    }
  }

  get name() {
    return this.detailsForm.get('name')!;
  }

  get description() {
    return this.detailsForm.get('description')!;
  }

  get errors() {
    const errorList = [];
    if (this.name.touched) {
      this.name.hasError('required') && errorList.push('Name is required!');
    }

    return errorList;
  }

  reset() {
    this.currentBrand = {
      logo: '',
      name: '',
      status: true,
      updateAt: new Date(),
    };

    this.name.setValue('');
    this.description.setValue('');
    this.name.markAsUntouched();
    this.isShowUploadError = false;
  }

  toggleDropdown() {
    this.isShowDropdown = !this.isShowDropdown;
  }

  setStatus(status: boolean) {
    this.currentBrand.status = status;
  }

  handleFileUpload(files: FileList) {
    if (files.item(0)) {
      var reader = new FileReader();
      reader.onloadend = () => {
        this.currentBrand.logo = reader.result as string;
      };
      reader.readAsDataURL(files.item(0)!);
    }
  }

  switchToEditMode() {
    this.mode = 'edit';
  }

  submit() {
    this.name.markAsTouched();
    !this.currentBrand.logo && (this.isShowUploadError = true);

    if (this.currentBrand.logo && this.errors.length === 0) {
      this.currentBrand.name = this.name.value || '';
      this.currentBrand.description = this.description.value || '';

      if (this.mode === 'edit') {
        this.onEditBrand.emit({
          id: this.brand!.id,
          ...this.currentBrand,
        } as CarBrand);
      }
      if (this.mode === 'add') {
        this.onAddBrand.emit(this.currentBrand as CarBrand);
        this.reset();
      }
    }
  }

  close() {
    this.reset();
    this.onClose.emit();
  }
}
