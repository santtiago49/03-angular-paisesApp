import { Component, OnInit } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  //Se crean las propiedades a utilizar

  termino: string = '';
  // Verifica el booleano hayError para ejecutar una condicion en el lado del html
  hayError: boolean = false;
  paises: Country[] = [];

  // hago la inyeccion de los servicios
  constructor( private paisService: PaisService) { }

  // El metodo buscar de pais-component lo que hace es recibir un termino y suscribirse
  // a el metodo del PaisService, clasificando sus respuestas (en next, err)

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
      .subscribe({
        next: (paises) => { 
          this.paises = paises;
        },
        error: (err) => { 
          this.hayError = true;
          this.paises = [];
          console.error(err)
        }
      })  
  }

}
