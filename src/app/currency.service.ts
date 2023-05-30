import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(private http: HttpClient) { }

  //Haalt de data op van de API en return deze aan alle subscribers.
  getCurrency(): Observable<number> {
    const currencyString = 'https://api.freecurrencyapi.com/v1/latest?apikey=qKqrp46k8hIXvnfgyqB1QskHZJgARwO6DCO9X2Sr&currencies=EUR'
    return this.http.get<any>(currencyString).pipe(
      map(response => response.data.EUR),
      catchError(this.handleError<number>('getCurrency'))
    );
  }
  
  handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(operation, error);
      return of(result as T);
    };
  }



}
