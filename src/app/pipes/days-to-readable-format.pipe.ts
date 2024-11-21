import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysToReadableFormat',
})
export class DaysToReadableFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (!value || value < 0) return '0 dias';

    const years = Math.floor(value / 365);
    const remainingDaysAfterYears = value % 365;
    const months = Math.floor(remainingDaysAfterYears / 30);
    const days = remainingDaysAfterYears % 30;

    let result = '';

    if (years > 0) {
      result += `${years} ano${years > 1 ? 's' : ''} `;
    }
    if (months > 0) {
      result += `${months} mês${months > 1 ? 'es' : ''} `;
    }
    if (days > 0) {
      result += `${days} dia${days > 1 ? 's' : ''}`;
    }

    return result.trim();
  }
}
