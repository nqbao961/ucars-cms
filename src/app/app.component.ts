import { Component, OnInit } from '@angular/core';
import { navRoutes } from './services/router';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  navRoutes: Routes = [];

  ngOnInit(): void {
    this.navRoutes = navRoutes;
  }
}
