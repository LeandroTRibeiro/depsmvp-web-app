import { Component, OnInit } from '@angular/core';
import { MENU_CONFIG } from './menu-config';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ResponsiveSidebarMenuService } from '../../../shared/services/responsive-sidebar-menu.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {
  menuItens = MENU_CONFIG;
  isMenuOpened = true;
  isHandSet = true;

  constructor(
    private _breakpointerOberver: BreakpointObserver,
    private _responsiveSidebarMenuService: ResponsiveSidebarMenuService
  ) {}

  handlerIsMenuOpen() {
    this._responsiveSidebarMenuService.toogleMenu();
  }

  ngOnInit(): void {
    this._breakpointerOberver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isHandSet = result.matches;
        this._responsiveSidebarMenuService.setMenuState(!result.matches);
      });

    this._responsiveSidebarMenuService.isMenuOpen$.subscribe((isMenuOpen) => {
      this.isMenuOpened = isMenuOpen;
    });
  }
}
