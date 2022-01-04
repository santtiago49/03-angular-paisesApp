import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';



@NgModule({
  declarations: [
    PorPaisComponent,
    PorCapitalComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  exports: [
    PorPaisComponent,
    PorCapitalComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class PaisModule { }
