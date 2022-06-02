import { Component, OnInit } from '@angular/core';
import {DeckCartaService} from "../../interceptores/deck-carta.service";
import {Deck} from "../../models/deck";
import {Jugador} from "../../models/jugador";
import {Formato} from "../../models/formato";
import {DeckCarta} from "../../models/deck-carta";
import {TablaMazoService} from "../../interceptores/tabla-mazo.service";



@Component({
  selector: 'app-cartas-deck',
  templateUrl: './cartas-deck.component.html',
  styleUrls: ['./cartas-deck.component.css']
})
export class CartasDeckComponent implements OnInit {

  jugador:Jugador = new Jugador(1,"juan","jaun","1234", "123")
  formato: Formato= new Formato(1,"")
  deck:Deck = new Deck(1," ",this.jugador,this.formato,"");
  cargado: boolean = false;
  cartasMain: number = 0;
  cartasSideboard = 0;

  deckCarta:DeckCarta[] = [];

  constructor(private deckCartaService: DeckCartaService, private tablaMazoService: TablaMazoService) {
    this.prueba();
   /* this.calcularCartasCopias();*/

  }

  ngOnInit(): void {

    this.tablaMazoService.disparadorDeckCarta.subscribe(
      data =>{
        this.deckCarta = data
      }
    )

  }
  prueba():void{
    this.deckCartaService.disparadorDeDeck.subscribe(data =>{
        this.deck=data.data

        console.log("data desde Tabla mazo"+data.data.carta);
        console.log("deck:"+this.deck);
      //  console.log("nombre baraja: "+this.deck.nombreBaraja)
        this.cargado=true;
        this.cargarDeckCarta(this.deck.id)
        this.cargarMazo(this.deckCarta);
      },
      err => console.error("err"))




}
cargarMazo(deckCarta:DeckCarta[]){

    this.tablaMazoService.disparadorDeckCarta.next({
      data:this.deckCarta
    })
}


cargarDeckCarta(deckId:number): void {

  this.cartasMain = 0;
  this.cartasSideboard = 0;
  this.deckCartaService.cargarDeckCarta(deckId).subscribe(
    data =>{
      this.deckCarta = data;

      this.cartasMain = 0;
      this.cartasSideboard = 0;
      this.cartasMain = this.tablaMazoService.calcularCartasCopiasMain(this.deckCarta)
      this.cartasSideboard = this.tablaMazoService.calcularCartasCopiasSideboard(this.deckCarta)

    },error => {console.log(error)}
  )}

}
