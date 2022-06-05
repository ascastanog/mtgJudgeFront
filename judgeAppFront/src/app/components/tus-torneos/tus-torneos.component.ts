import { Component, OnInit } from '@angular/core';
import {TorneoService} from "../../service/torneo.service";

@Component({
  selector: 'app-tus-torneos',
  templateUrl: './tus-torneos.component.html',
  styleUrls: ['./tus-torneos.component.css']
})
export class TusTorneosComponent implements OnInit {

  tusTorneos:any[]=[];
  constructor(private torneoService: TorneoService) { }

  ngOnInit(): void {
    this.cargarTorneos()
  }
  cargarTorneos(){
    this.torneoService.torneosByJugador().subscribe(
      data =>{
        this.tusTorneos = data;
        console.log(this.tusTorneos)
      }
    )

  }
}
