import { Component, OnInit } from '@angular/core';
import {JugadorService} from "../../service/jugador.service";
import {Observable} from "rxjs";
import {Deck} from "../../models/deck";
import {DeckCartaService} from "../../interceptores/deck-carta.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-players',
  templateUrl: './home-players.component.html',
  styleUrls: ['./home-players.component.css']
})
export class HomePlayersComponent implements OnInit {

  decks:Deck[]=[];

//  deck:Deck=new Deck();
  constructor(private jugadorService: JugadorService, private deckCartaService: DeckCartaService, private router:Router, ) { }

  ngOnInit(): void {
   this.cargarDecks();

  }
cargarDecks():void{
    this.jugadorService.getDecks().subscribe(
      data =>{this.decks = data;
        console.log(this.decks)
        },
        err=>{console.log(err)}
  )
}
irAlDeckCarta(deck: Deck):void{
this.deckCartaService.disparadorDeDeck.next({
  data:deck
})
 //this.router.navigate(['/cartas-deck'])
}

}
