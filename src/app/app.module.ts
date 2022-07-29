import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarBrandsComponent } from './pages/car-brands/car-brands.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ModulesComponent } from './pages/modules/modules.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { SettingComponent } from './pages/setting/setting.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SharedModule } from './shared';
import { BrandDetailsComponent } from './pages/brand-details/brand-details.component';
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
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
