import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrandsHeaderComponent } from './components/brands-header/brands-header.component';
import { BrandsContentComponent } from './components/brands-content/brands-content.component';
import { CoreModule } from 'src/app/core';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [BrandsHeaderComponent, BrandsContentComponent],
  exports: [BrandsHeaderComponent, BrandsContentComponent],
})
export class CarBrandsModule {}
