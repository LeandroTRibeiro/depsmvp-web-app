import { TestBed } from '@angular/core/testing';

import { ResponsiveSidebarMenuService } from './responsive-sidebar-menu.service';

describe('ResponsiveSidebarMenuService', () => {
  let service: ResponsiveSidebarMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiveSidebarMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
