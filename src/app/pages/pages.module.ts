import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core';
import {
  BrandDetailsComponent,
  CarBrandsComponent,
  ModulesComponent,
  NotificationComponent,
  PageNotFoundComponent,
  SettingComponent,
  TasksComponent,
  MenuItemComponent,
} from './';
import { BrandDetailsModule } from './brand-details/brand-details.module';
import { CarBrandsModule } from './car-brands/car-brands.module';

@NgModule({
  imports: [CommonModule, CarBrandsModule, CoreModule, BrandDetailsModule],
  declarations: [
    BrandDetailsComponent,
    CarBrandsComponent,
    ModulesComponent,
    NotificationComponent,
    PageNotFoundComponent,
    SettingComponent,
    TasksComponent,
    MenuItemComponent,
  ],
  exports: [CarBrandsModule, BrandDetailsModule],
})
export class PagesModule {}
