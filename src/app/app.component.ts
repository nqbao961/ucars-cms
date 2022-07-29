import { Component, OnInit } from '@angular/core';
import { navRoutes, RouteWithIcon } from './services/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  navRoutes: RouteWithIcon[] = [];
  isSidebarExpanded = true;
  isFolderExpanded = true;

  ngOnInit(): void {
    this.navRoutes = navRoutes;
  }

  onToggleSidebar() {
    this.isSidebarExpanded && (this.isFolderExpanded = false);
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  onToggleFolder() {
    !this.isFolderExpanded && (this.isSidebarExpanded = true);
    this.isFolderExpanded = !this.isFolderExpanded;
  }
}
