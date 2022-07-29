import { Routes } from '@angular/router';
import {
  BrandDetailsComponent,
  CarBrandsComponent,
  ModulesComponent,
  NotificationComponent,
  TasksComponent,
} from 'src/app/pages';
import { MenuItemComponent } from 'src/app/pages/menu-item/menu-item.component';

export const navRoutes: Routes = [
  {
    path: 'car-brands',
    title: 'Car Brands',
    component: CarBrandsComponent,
  },
  {
    path: 'modules',
    title: 'Modules',
    component: ModulesComponent,
  },
  {
    path: 'notification',
    title: 'Notification',
    component: NotificationComponent,
  },
  {
    path: 'tasks',
    title: 'Tasks',
    component: TasksComponent,
  },
  {
    path: '',
    title: 'Folder',
    children: [
      {
        path: 'menu-item-1',
        title: 'Menu Item',
        component: MenuItemComponent,
      },
      {
        path: 'menu-item-2',
        title: 'Menu Item',
        component: MenuItemComponent,
      },
      {
        path: 'menu-item-3',
        title: 'Menu Item',
        component: MenuItemComponent,
      },
      {
        path: 'menu-item-4',
        title: 'Menu Item',
        component: MenuItemComponent,
      },
    ],
  },
];
