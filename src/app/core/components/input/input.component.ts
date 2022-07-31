import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() label: string = '';
  @Input() errors: string[] | undefined = [];
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() mode: 'text' | 'textarea' | 'search' = 'text';
  @Input() disabled = false;
  @Input() readonly = false;
  @Output() handleChange = new EventEmitter();

  value: any = '';

  constructor(
    @Self()
    @Optional()
    private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {}

  writeValue(value: any): void {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange(value: any) {}
  onTouched() {}
  changeValue(value: any) {
    this.value = value;
  }
}
