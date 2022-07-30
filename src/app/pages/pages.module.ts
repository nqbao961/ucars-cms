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
import { CarBrandsModule } from './car-brands/car-brands.module';

@NgModule({
  imports: [CommonModule, CarBrandsModule, CoreModule],
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
  exports: [CarBrandsModule],
})
export class PagesModule {}
