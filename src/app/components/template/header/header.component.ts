import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ResponsiveSidebarMenuService} from "../../../shared/services/responsive-sidebar-menu.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = true;
  isHandset = false;

  constructor(
    private _breakpointObserver: BreakpointObserver,
    private _responsiveSidebarMenuService: ResponsiveSidebarMenuService
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
  };
}
