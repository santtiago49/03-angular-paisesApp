import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
      margin-bottom: 7px;
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU',
                     'AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];

  regionActiva: string = ''

  getClassCSS( region: string ): string {
    return (region === this.regionActiva ) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  constructor() { }

  cambiarRegion( region: string) {
    this.regionActiva = region;
  }


  // TODO: pasar al servicio la region activa para luego mostrar en tabla 

}
