import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CnfCnpjMaskService {
  applyMask(value: string, documentLabel: string): string  {
    value = value.replace(/\D/g, '');

    if (documentLabel === 'CPF') {

      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else if (documentLabel === 'CNPJ') {

      value=value.replace(/\D/g,"")
      value=value.replace(/^(\d{2})(\d)/,"$1.$2")
      value=value.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
      value=value.replace(/\.(\d{3})(\d)/,".$1/$2")
      value=value.replace(/(\d{4})(\d)/,"$1-$2")
    }

    return value;
  }
}
