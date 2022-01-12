import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Importo la interface de RestCountry 
import { Country } from '../interface/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl = 'https://restcountries.com/v3.1/'

  // Importamos en el constructor el httpClient
  constructor( private http: HttpClient) { }

  // se crea el metodo que retona un observable de tipo array de Country
  buscarPais( termino: string ): Observable<Country[]> {
    // constante para general el link de solicitud http + el termino
    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>(url);
  }
  
  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>(url);
  }

}