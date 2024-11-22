import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveSidebarMenuService {
  private _isMenuOpenSubject = new BehaviorSubject<boolean>(true);
  isMenuOpen$ = this._isMenuOpenSubject.asObservable();

  toogleMenu() {
    const currentStatus = this._isMenuOpenSubject.getValue();
    this._isMenuOpenSubject.next(!currentStatus);
  }

  setMenuState(isMenuOpen: boolean) {
    this._isMenuOpenSubject.next(isMenuOpen);
  }
}
