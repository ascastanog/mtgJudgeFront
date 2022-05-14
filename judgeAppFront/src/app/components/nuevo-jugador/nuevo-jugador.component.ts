import { Component, OnInit } from '@angular/core';

import {AuthService} from "../../service/auth.service";
import {NuevoJugador} from "../../models/nuevo-jugador";

@Component({
  selector: 'app-nuevo-jugador',
  templateUrl: './nuevo-jugador.component.html',
  styleUrls: ['./nuevo-jugador.component.css']
})
export class NuevoJugadorComponent implements OnInit {
  // @ts-ignore
  nuevoJugador: NuevoJugador;
  // @ts-ignore
  nombre: string;
  // @ts-ignore

  // @ts-ignore
  email: string;
  // @ts-ignore
  password: string;
  // @ts-ignore
  DCI: string;
  // @ts-ignore
  nombreUsuario: string;
  // @ts-ignore
  authorities: string[];




  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  crearJugador() {
    console.log("peticion para crear usuario");

    this.nuevoJugador = new NuevoJugador(this.nombre, this.nombreUsuario, this.email, this.DCI, this.password, this.authorities=['PLAYER'])
    console.log(this.nuevoJugador)
    this.authService.nuevo(this.nuevoJugador).subscribe(
      data =>{

      }, err =>{
       console.log("error en el crear usuario")
    }
    )
  }

}
