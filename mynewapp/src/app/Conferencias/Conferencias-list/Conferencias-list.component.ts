import { Component, OnInit } from '@angular/core';
import { Conferencia } from '../Conferencia';
import { ConferenciaService } from '../Conferencia.service';


@Component({
  standalone: false,
  selector: 'app-Conferencias-list',
  templateUrl: './Conferencias-list.component.html',
  styleUrls: ['./Conferencias-list.component.css']
})
export class ConferenciasListComponent implements OnInit {

  Conferencias: Array<Conferencia> = [];
  constructor(private conferenciaService: ConferenciaService) { }

  getConferencias(): void 
  {
    this.conferenciaService.getConferencias().subscribe(
      (Conferencias) => 
      {
        this.Conferencias=Conferencias;
      }
    );
  }

  ngOnInit() {
    this.getConferencias();
  }

}
