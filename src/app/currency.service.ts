import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }
  async getCurrency() {
    const reponse = await fetch("http://data.fixer.io/api/latest?access_key=18e78d4043a60acda0b6537e0864f164")
    .then(reponse => reponse.json).then(data => console.log(JSON.stringify(data)));
  }
  
}
