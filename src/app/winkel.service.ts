import { Injectable } from '@angular/core';
import { Winkel } from './model/winkel';
import { WINKELS } from './mock-winkels';
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WinkelService {

  constructor() { }

  getWinkels():Observable<Winkel[]> {
    return of (WINKELS);
  }
}
