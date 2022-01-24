import { Component, OnInit } from '@angular/core';
import { Country } from '../../interface/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  //Se crean las propiedades a utilizar

  termino: string = '';
  // Verifica el booleano hayError para ejecutar una condicion en el lado del html
  hayError: boolean = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  // hago la inyeccion de los servicios
  constructor( private paisService: PaisService) { }

  // El metodo buscar de pais-component lo que hace es recibir un termino y suscribirse
  // a el metodo del PaisService, clasificando sus respuestas (en next, err)

  buscar(termino: string){
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
      .subscribe({
        next: (paises) => { 
          // vinculamos la propiedad paises a el parametro de buscar()
          this.paises = paises;
          // console.log(paises);
        },
        error: (err) => { 
          this.hayError = true;
          this.paises = [];
          console.error(err)
        }
      })  
  }

  sugerencias( termino: string ){
    this.termino = termino
    this.hayError = false;
    this.mostrarSugerencias = true
    // TODO: crear sugerencias

    this.paisService.buscarPais( termino )
      .subscribe({
        next : (paises) => this.paisesSugeridos = paises.splice(0,5),
        error: () => this.paisesSugeridos = []
      })

  }

  buscarSugerido( termino: string ){
    this.buscar(termino);
  }


}
