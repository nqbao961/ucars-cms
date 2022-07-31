import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core';
import { BrandDetailsContentComponent } from './components/brand-details-content/brand-details-content.component';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [BrandDetailsContentComponent],
  exports: [BrandDetailsContentComponent],
})
export class BrandDetailsModule {}
