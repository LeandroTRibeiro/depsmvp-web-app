import { Injectable } from '@angular/core';
import { Pep } from '../models/pep.model';

@Injectable({
  providedIn: 'root',
})
export class PepStorageService {
  private peps: Pep[] = [];

  setPeps(peps: Pep[]): void {
    this.peps = peps;
  }

  getPeps(): Pep[] {
    return this.peps;
  }
}
