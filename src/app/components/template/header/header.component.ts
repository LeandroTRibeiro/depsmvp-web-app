import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ResponsiveSidebarMenuService} from "../../../shared/services/responsive-sidebar-menu.service";
import {HEADER_CONFIG} from "./header-config";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  titleKey: string = "header.home";
  icon: string = "home";

  isMenuOpen = true;
  isHandset = false;

  constructor(
    private _breakpointObserver: BreakpointObserver,
    private _responsiveSidebarMenuService: ResponsiveSidebarMenuService,
    private _router: Router
  ) {};

  handleIsMenuOpen() {
    this._responsiveSidebarMenuService.toogleMenu();
  };
  ngOnInit(): void {
    this._breakpointObserver.observe([Breakpoints.Handset]).subscribe( result => {
      this.isHandset = result.matches;
      this._responsiveSidebarMenuService.setMenuState(!result.matches);
    });

    this._responsiveSidebarMenuService.isMenuOpen$.subscribe(isMenuOpen => {
      this.isMenuOpen = isMenuOpen;
    });

    this._router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        const currentRoute = event.url;

        const headerItem = HEADER_CONFIG.find(item => item.route === currentRoute);

        if(headerItem) {
          this.titleKey = headerItem.key;
          this.icon = headerItem.icon;
        }
      }
    });



  };
}
