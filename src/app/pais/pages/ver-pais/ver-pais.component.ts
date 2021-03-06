import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { KeyValue } from '@angular/common';



import { PaisService } from '../../services/pais.service';
import { Country, Languages } from '../../interface/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  

  ngOnInit(): void {


    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id )),
        tap( resp => console.log(resp[0]) ) 
      )
      .subscribe( pais => this.pais = pais[0] );
      // agregue el [0] para que no me lo entregue como un array sino
      // como el primer valor de su objeto
  }
}