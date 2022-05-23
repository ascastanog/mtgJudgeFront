import {Carta} from "./carta";
import { Jugador } from "./jugador";
import {Formato} from "./formato";

export class Deck {

  id: number;
  nombreBaraja: string;
 // cartas: Carta[];

  jugador: Jugador;
  formato: Formato;
  imagen: string;


  constructor(id: number, nombreBaraja: string, jugador: Jugador, formato: Formato, imagen: string) {
    this.id = id;
    this.nombreBaraja = nombreBaraja;
    this.jugador = jugador;
    this.formato = formato;
    this.imagen = imagen;
  }
}

