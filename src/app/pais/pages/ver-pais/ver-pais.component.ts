import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from "rxjs/operators";


import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {


    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id ))
      )
      .subscribe( resp => {
        console.log( resp[0] );
      });
    
    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log( id )

    //     this.paisService.getPaisPorAlpha( id )
    //       .subscribe( paises => {
    //         console.log( paises[0] )
    //       });
        


    //   })
     
  }


}
