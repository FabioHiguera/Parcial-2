import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciasListComponent } from './Conferencias-list/Conferencias-list.component';
import { ConferenciaDetailComponent } from './Conferencia-Detail/Conferencia-Detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ConferenciasListComponent],
  declarations: [ConferenciasListComponent, ConferenciaDetailComponent]
})
export class ConferenciasModule { }
