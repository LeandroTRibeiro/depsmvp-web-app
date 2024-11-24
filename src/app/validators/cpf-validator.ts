import { AbstractControl, ValidationErrors } from '@angular/forms';

export function cpfValidator(
  control: AbstractControl
): ValidationErrors | null {
  const cpf = control.value.replace(/\D/g, '');

  if (!cpf || cpf.length !== 11 || !/^\d{11}$/.test(cpf)) {
    return { invalidCPF: true };
  }

  if (!validateCPF(cpf)) {
    return { invalidCPF: true };
  }

  return null;
}

function validateCPF(cpf: string): boolean {
  if (/^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let sum = 0;
  let remainder: number;

  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(9))) return false;

  sum = 0;

  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;

  return remainder === parseInt(cpf.charAt(10));
}
