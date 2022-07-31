import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components';
import { InputComponent } from './components/input/input.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ButtonComponent, InputComponent, ClickOutsideDirective],
  exports: [
    ButtonComponent,
    InputComponent,
    FormsModule,
    ReactiveFormsModule,
    ClickOutsideDirective,
  ],
})
export class CoreModule {}
