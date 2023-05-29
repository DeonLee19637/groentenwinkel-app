import { Injectable } from '@angular/core';
import { Groenten } from './mock-groenten';
import { Groente } from './model/groente';
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroenteService {
  
  constructor() { }
  getGroenten():Observable<(string | number)[][]> {
    return of (Groenten);
  }

  addGroenteToMandje(groente: string, prijs: number, aantal: number):Observable<(Groente)[][]> {
    const artikel: Groente = { naam: groente, prijs, aantal };
    return new Observable<(Groente)[][]>(artikel1 => artikel1 = artikel);
  }
}
