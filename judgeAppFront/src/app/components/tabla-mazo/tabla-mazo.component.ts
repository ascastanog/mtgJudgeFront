import { Component, OnInit } from '@angular/core';
import {DeckCarta} from "../../models/deck-carta";
import {TablaMazoService} from "../../interceptores/tabla-mazo.service";
import {Jugador} from "../../models/jugador";
import {Formato} from "../../models/formato";
import {Deck} from "../../models/deck";
import {DeckCartaService} from "../../interceptores/deck-carta.service";

@Component({
  selector: 'app-tabla-mazo',
  templateUrl: './tabla-mazo.component.html',
  styleUrls: ['./tabla-mazo.component.css']
})
export class TablaMazoComponent implements OnInit {
  deckCarta:DeckCarta[]= []
  jugador:Jugador = new Jugador(1,"juan","jaun","1234", "123")
  formato: Formato= new Formato(1,"")
  deck:Deck = new Deck(1," ",this.jugador,this.formato,"");

  constructor(private tablaMazoService: TablaMazoService, private deckCartaService: DeckCartaService) {
    this.prueba();

    this.tablaMazoService.disparadorDeckCarta.subscribe(
      data =>{
        this.deckCarta = data
        console.log("deckCarta desde tablaMazo"+this.deckCarta)
      }
    )

  }
  ngOnInit(): void {
    console.log("deckCarta desde tablaMazo"+this.deckCarta)
  }

  prueba():void {
    this.tablaMazoService.disparadorDeckCarta.subscribe(data=>{
      this.deckCarta = data.data;
      console.log("DeckCarta desdes TablaMazo"+data);
      console.log("deckCarta"+this.deckCarta);


    })
  }
  }
