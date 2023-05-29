import { Injectable } from '@angular/core';
import { Groenten } from './mock-groenten';
import { Groente } from './model/groente';
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

let winkelMandje: Groente[] = [];
let totalePrijs = 0;

@Injectable({
  providedIn: 'root'
})
export class GroenteService {
  constructor() { }
  getGroenten():Observable<(string | number)[][]> {
    return of (Groenten);
  }

  addGroenteToMandje(winkelNaam: string, groenteNaam: string, aantal: number) {
    //Slice haalt de laatste spatie weg die vlak voor de "(" komt
    let prijs = this.findGroenteByNaam(groenteNaam.slice(0, -1));
    let artikel: Groente = { winkelNaam, groenteNaam, prijs, aantal };

    let dubbeleGroente = winkelMandje.find((winkel) => winkel.winkelNaam === winkelNaam) 
    && winkelMandje.find((groente) => groente.groenteNaam === groenteNaam);
    if (dubbeleGroente){
      dubbeleGroente.aantal += aantal;
      totalePrijs += aantal * dubbeleGroente.prijs;
    }
    else{
      winkelMandje.push(artikel);
      totalePrijs += artikel.prijs * artikel.aantal;
    }
  }

  //De prijs van de groente vinden op basis van de naam, aangezien aangeleverde object die informatie niet bevat
  findGroenteByNaam(naam: string): number | null{
    let juisteGroente = Groenten.find((groente) => groente[0] === naam);
    return juisteGroente ? Number(juisteGroente[1]) : null;
  }

  //Haalt de volledige prijs op
  getPrijs(): Observable<number>
  {
    return of (totalePrijs);
  }
  
  //Haalt winkelmandje op
  getWinkelMandje() {
    return winkelMandje;
  }
}
