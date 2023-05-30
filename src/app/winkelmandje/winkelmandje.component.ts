import { Component, OnInit } from '@angular/core';
import { GroenteService } from '../groente.service';
import { Groente } from '../model/groente';
import { WinkelService } from '../winkel.service';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-winkelmandje',
  templateUrl: './winkelmandje.component.html',
  styleUrls: ['./winkelmandje.component.css']
})
export class WinkelmandjeComponent implements OnInit {
  artikelen: Groente[] = [];
  totalePrijs = 0;
  currentCurrency = "USD";
  reverseCurrency = "EUR";
  displayUSD = false;
  conversionRate: number;

  constructor(private groenteService: GroenteService, private winkelService: WinkelService, 
    private currencyService: CurrencyService){}
  ngOnInit(): void {
    this.groenteService.getWinkelMandje().subscribe(artikel => this.artikelen = artikel);
    this.currencyService.getCurrency().subscribe(data => this.conversionRate = data);
  }

  //Prijs ophalen van de service en updaten in de view
  getTotalePrijs() {
    this.groenteService.getPrijs().subscribe(prijs => this.totalePrijs = prijs);
  }

  //Adres van een winkel ophalen en toevoegen aan de title van een rij
  getWinkel(naam: string) {
    return this.winkelService.getWinkelAdres(naam);
  }

  //Verandert de currency van Euro naar American Dollar en vice versa
  changeCurrency() {
    if (this.currentCurrency === "USD"){
      this.currentCurrency = "EUR";
      this.reverseCurrency = "USD";
      this.displayUSD = true;
    }
    else{
      this.currentCurrency = "USD";
      this.reverseCurrency = "EUR";
      this.displayUSD = false;
    }
  }
}
