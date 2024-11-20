import { Component, OnInit } from '@angular/core';
import { Conferencia } from '../Conferencia';

@Component({
  standalone: false,
  selector: 'app-Conferencias-list',
  templateUrl: './Conferencias-list.component.html',
  styleUrls: ['./Conferencias-list.component.css']
})
export class ConferenciasListComponent implements OnInit {

  Conferencias: Array<Conferencia> = [];
  constructor() { }

  ngOnInit() {
  }

}
