import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IntervalUtilsService {
  convertCustomIntervalToDays(value: number, unit: string): number {
    switch (unit.toLowerCase()) {
      case 'dia':
        return value;
      case 'mes':
        return value * 30;
      case 'ano':
        return value * 365;
      default:
        return 0;
    }
  }
}
