import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  BrandDetailsComponent,
  PageNotFoundComponent,
  SettingComponent,
} from './pages';
import { navRoutes } from './services/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/car-brands',
    pathMatch: 'full',
  },
  {
    path: 'car-brands/:brandId',
    title: 'Car Brands',
    component: BrandDetailsComponent,
  },
  {
    path: 'setting',
    title: 'Setting',
    component: SettingComponent,
  },
  ...navRoutes,
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
