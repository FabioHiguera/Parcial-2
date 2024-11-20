import { Component, Input, OnInit } from '@angular/core';
import { ConferenciaDetail } from '../ConferenciaDetail';

@Component({
  standalone: false,
  selector: 'app-Conferencia-Detail',
  templateUrl: './Conferencia-Detail.component.html',
  styleUrls: ['./Conferencia-Detail.component.css']
})
export class ConferenciaDetailComponent implements OnInit {

  @Input() conferenciaDetail!: ConferenciaDetail;

  constructor() { }

  ngOnInit() {
  }

}
