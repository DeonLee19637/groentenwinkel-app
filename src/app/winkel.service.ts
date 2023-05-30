import { Injectable } from '@angular/core';
import { Winkel } from './model/winkel';
import { WINKELS } from './mock-winkels';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WinkelService {

  constructor() { }

  //Haalt alle winkels op
  getWinkels():Observable<Winkel[]> {
    return of (WINKELS);
  }
  
  //Haalt het adres uit een gegeven naam van een winkel
  getWinkelAdres(adres: string) {
    let winkelObject = WINKELS.find((winkel) => winkel.naam === adres)
    return winkelObject.adres;
  }
}
