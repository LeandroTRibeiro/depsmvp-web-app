import { Validators } from '@angular/forms';
import { cpfValidator } from './cpf-validator';
import { cnpjValidator } from './cnpj-validator';

export function getDocumentValidators(type: string) {
  if (type === 'cpf') {
    return [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
      cpfValidator,
    ];
  } else if (type === 'cnpj') {
    return [
      Validators.required,
      Validators.minLength(14),
      Validators.maxLength(14),
      cnpjValidator,
    ];
  }
  return [];
}
