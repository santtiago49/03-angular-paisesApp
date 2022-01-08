import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

  constructor() { }

  termino: string = ''

  buscar(){
    console.log(this.termino);
  }

}
