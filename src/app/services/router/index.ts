import { Route } from '@angular/router';
import {
  CarBrandsComponent,
  ModulesComponent,
  NotificationComponent,
  TasksComponent,
} from 'src/app/pages';
import { MenuItemComponent } from 'src/app/pages/menu-item/menu-item.component';

export interface RouteWithIcon extends Route {
  iconSrc?: string;
  alt?: string;
  children?: RouteWithIcon[];
}

export const navRoutes: RouteWithIcon[] = [
  {
    path: 'car-brands',
    title: 'Car Brands',
    iconSrc: 'assets/images/car.png',
    alt: 'car',
    component: CarBrandsComponent,
  },
  {
    path: '',
    title: 'Folder',
    iconSrc: 'assets/images/calendar.png',
    alt: 'calendar',
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
  {
    path: 'tasks',
    title: 'Tasks',
    iconSrc: 'assets/images/calendar.png',
    alt: 'calendar',
    component: TasksComponent,
  },
  {
    path: 'modules',
    title: 'Modules',
    iconSrc: 'assets/images/calendar.png',
    alt: 'calendar',
    component: ModulesComponent,
  },
  {
    path: 'notification',
    title: 'Notification',
    iconSrc: 'assets/images/calendar.png',
    alt: 'calendar',
    component: NotificationComponent,
  },
];
