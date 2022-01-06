import { Component, OnInit } from '@angular/core';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;

  constructor( private paisService: PaisService) { }

  buscar(){
    this.hayError = false;
    this.paisService.buscarPais(this.termino)
      .subscribe({
        next: (paises) => { 
          console.log(paises);
        },
        error: (err) => { 
          this.hayError = true;
          console.error(err)
        }
      })  
  }
}
