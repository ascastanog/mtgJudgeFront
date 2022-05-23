import {Carta} from "./carta";
import {Deck} from "./deck";

export class DeckCarta {
  id:number;
  carta:Carta;
  deck:Deck;
  copias:number;
  sideboard:boolean;


  constructor(id: number, carta: Carta, deck: Deck, copias: number, sideboard: boolean) {
    this.id = id;
    this.carta = carta;
    this.deck = deck;
    this.copias = copias;
    this.sideboard = sideboard;
  }
}
