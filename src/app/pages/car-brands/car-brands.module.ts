import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  BrandsHeaderComponent,
  DialogAddBrand,
} from './components/brands-header/brands-header.component';
import { BrandsContentComponent } from './components/brands-content/brands-content.component';
import { CoreModule } from 'src/app/core';
import { BrandDetailsModule } from '../brand-details/brand-details.module';

@NgModule({
  imports: [CommonModule, CoreModule, BrandDetailsModule],
  declarations: [BrandsHeaderComponent, BrandsContentComponent, DialogAddBrand],
  exports: [BrandsHeaderComponent, BrandsContentComponent],
})
export class CarBrandsModule {}
