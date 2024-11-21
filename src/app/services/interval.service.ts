import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IntervalService {
  convertToDays(intervalData: { interval: number; unit: string }): number {
    const { interval, unit } = intervalData;
    switch (unit) {
      case 'dia':
        return interval;
      case 'mes':
        return interval * 30;
      case 'ano':
        return interval * 365;
      default:
        return interval;
    }
  }
}
