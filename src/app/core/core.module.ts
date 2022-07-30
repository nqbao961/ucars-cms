import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components';
import { InputComponent } from './components/input/input.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ButtonComponent, InputComponent],
  exports: [ButtonComponent, InputComponent, FormsModule, ReactiveFormsModule],
})
export class CoreModule {}
