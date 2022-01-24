import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

// Importo la interface de RestCountry 
import { Country } from '../interface/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl = 'https://restcountries.com/v3.1/'

  // Importamos en el constructor el httpClient
  constructor( private http: HttpClient) { }

  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,flags,population,cca2')
  }


  // se crea el metodo que retona un observable de tipo array de Country
  buscarPais( termino: string ): Observable<Country[]> {
    // constante para general el link de solicitud http + el termino
    const url = `${ this.apiUrl }name/${ termino }`;

    return this.http.get<Country[]>(url, {params: this.httpParams });
  }
  
  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorAlpha( id: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/alpha/${ id }`;

    return this.http.get<Country[]>(url);  
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${ region }`;

    return this.http.get<Country[]>(url, {params: this.httpParams} );  
  }

}