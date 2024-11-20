import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciasListComponent } from './Conferencias-list/Conferencias-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ConferenciasListComponent],
  declarations: [ConferenciasListComponent]
})
export class ConferenciasModule { }
