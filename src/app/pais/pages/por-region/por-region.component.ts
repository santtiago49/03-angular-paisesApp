import { Component } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 7px;
      margin-bottom: 7px;
    }
  `]
})


export class PorRegionComponent {

  region: string = ''
  regionActiva: string = ''
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']

  paises: Country[] = []

  getClassCSS( region: string ): string {
    return (region === this.regionActiva ) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  constructor( private paisService: PaisService) {}

  cambiarRegion( region: string) {

    if( region === this.regionActiva) {return;}

    this.region = region;
    this.paises = []
    this.regionActiva = region;

    this.paisService.buscarRegion(region)
      .subscribe( paises => this.paises = paises)
  }

}
