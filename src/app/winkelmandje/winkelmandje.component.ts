import { Component, OnInit } from '@angular/core';
import { GroenteService } from '../groente.service';
import { Groente } from '../model/groente';

@Component({
  selector: 'app-winkelmandje',
  templateUrl: './winkelmandje.component.html',
  styleUrls: ['./winkelmandje.component.css']
})
export class WinkelmandjeComponent implements OnInit {
  artikelen: Groente[] = [];

  constructor(private groenteService: GroenteService){}
  ngOnInit(): void {
    this.addArtikel();
  }
  
  addArtikel(){
    this.artikelen = this.groenteService.getWinkelMandje();
  }
}
