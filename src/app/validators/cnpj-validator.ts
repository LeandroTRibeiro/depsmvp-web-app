import { AbstractControl, ValidationErrors } from '@angular/forms';

export function cnpjValidator(
  control: AbstractControl
): ValidationErrors | null {
  const cnpj = control.value.replace(/\D/g, '');

  if (!cnpj || cnpj.length !== 14 || !/^\d{14}$/.test(cnpj)) {
    return { invalidCNPJ: true };
  }

  if (!validateCNPJ(cnpj)) {
    return { invalidCNPJ: true };
  }

  return null;
}

function validateCNPJ(cnpj: string): boolean {
  if (/^(\d)\1+$/.test(cnpj)) return false;

  let length = cnpj.length - 2;
  let numbers = cnpj.substring(0, length);
  let digits = cnpj.substring(length);
  let sum = 0;
  let pos = length - 7;

  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers.charAt(length - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) return false;

  length++;
  numbers = cnpj.substring(0, length);
  sum = 0;
  pos = length - 7;

  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers.charAt(length - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  return result === parseInt(digits.charAt(1));
}
