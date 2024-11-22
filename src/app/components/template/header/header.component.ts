import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ResponsiveSidebarMenuService } from '../../../services/responsive-sidebar-menu-service/responsive-sidebar-menu.service';
import { HEADER_CONFIG } from './header-config';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  titleKey: string = 'header.home';
  icon: string = 'home';

  isMenuOpen = true;
  isHandset = false;

  constructor(
    private _breakpointObserver: BreakpointObserver,
    private _responsiveSidebarMenuService: ResponsiveSidebarMenuService,
    private _router: Router,
    private _location: Location
  ) {}

  handleIsMenuOpen() {
    this._responsiveSidebarMenuService.toogleMenu();
  }
  ngOnInit(): void {
    this._breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isHandset = result.matches;
        this._responsiveSidebarMenuService.setMenuState(!result.matches);
      });

    this._responsiveSidebarMenuService.isMenuOpen$.subscribe((isMenuOpen) => {
      this.isMenuOpen = isMenuOpen;
    });

    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        const routeSegments = currentRoute.split('/');

        const headerItem = HEADER_CONFIG.find((item) => {
          const configSegments = item.route.split('/');

          if (configSegments.length !== routeSegments.length) {
            return false;
          }

          return configSegments.every((segment, index) => {
            return segment.startsWith(':') || segment === routeSegments[index];
          });
        });

        if (headerItem) {
          this.titleKey = headerItem.key;
          this.icon = headerItem.icon;
        }
      }
    });
  }
  goBack() {
    this._location.back();
  }
}
