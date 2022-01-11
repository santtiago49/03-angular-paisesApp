import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

  constructor() { }

  // creamos evento con el decorador Output para emitir el termino
  // obtenido a su componente padre PorPais
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  termino: string = ''

  buscar(){
    this.onEnter.emit(this.termino)
  }

}
