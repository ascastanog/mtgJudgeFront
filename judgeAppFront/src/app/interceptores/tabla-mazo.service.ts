import {EventEmitter, Injectable, Output} from '@angular/core';
import {Subject} from "rxjs";
import {DeckCarta} from "../models/deck-carta";

@Injectable({
  providedIn: 'root'
})
export class TablaMazoService {
  cartasMain: number =0;
  cartasSideboard : number = 0;
 disparadorDeckCarta:Subject<any>= new Subject<any>();

  constructor() { }



  calcularCartasCopiasMain(deckCarta: DeckCarta[]):number  {
    this.cartasMain =0;
    for(let i =0; i<deckCarta.length; i++){
      if(deckCarta[i].sideboard==false){
        this.cartasMain = this.cartasMain+deckCarta[i].copias
      }
    }
    return this.cartasMain;
  }
  calcularCartasCopiasSideboard(deckCarta: DeckCarta[]):number  {
  this.cartasSideboard = 0;
    for(let i =0; i<deckCarta.length; i++){
      if(deckCarta[i].sideboard){
        this.cartasSideboard = this.cartasSideboard+deckCarta[i].copias
      }
    }
    return this.cartasSideboard;
  }

}


