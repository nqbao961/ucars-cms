import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';

import { CoreModule } from './core';
import {
  BrandDetailsComponent,
  CarBrandsComponent,
  ModulesComponent,
  NotificationComponent,
  PageNotFoundComponent,
  SettingComponent,
  TasksComponent,
} from './pages';
import { MenuItemComponent } from './pages/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CarBrandsComponent,
    TasksComponent,
    ModulesComponent,
    NotificationComponent,
    SettingComponent,
    PageNotFoundComponent,
    BrandDetailsComponent,
    MenuItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
