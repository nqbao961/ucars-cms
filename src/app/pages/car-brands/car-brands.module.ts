import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrandsHeaderComponent } from './components/brands-header/brands-header.component';
import { BrandsContentComponent } from './components/brands-content/brands-content.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BrandsHeaderComponent, BrandsContentComponent],
  exports: [BrandsHeaderComponent, BrandsContentComponent],
})
export class CarBrandsModule {}
