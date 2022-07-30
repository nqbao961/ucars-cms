import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components';
import { InputComponent } from './components/input/input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, InputComponent],
  exports: [ButtonComponent, InputComponent],
})
export class CoreModule {}
