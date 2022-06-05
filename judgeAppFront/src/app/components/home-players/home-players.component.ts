import { Component, OnInit } from '@angular/core';
import {JugadorService} from "../../service/jugador.service";
import {Observable} from "rxjs";
import {Deck} from "../../models/deck";
import {DeckCartaService} from "../../interceptores/deck-carta.service";
import { Router } from '@angular/router';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-home-players',
  templateUrl: './home-players.component.html',
  styleUrls: ['./home-players.component.css']
})
export class HomePlayersComponent implements OnInit {

  decks:Deck[]=[];
  imagenes:any[]=[]

  constructor(private jugadorService: JugadorService, private deckCartaService: DeckCartaService, private router:Router,public domSanitizer: DomSanitizer ) { }

  ngOnInit(): void {
   this.cargarDecks();

  }
cargarDecks():void{
    this.jugadorService.getDecks().subscribe(
      data =>{this.decks = data;
        console.log(this.decks)
        for(let i = 0; i<this.decks.length; i++){
        /*  this.cargarImagen(this.decks[i].id);*/
        }
        },
        err=>{console.log(err)}
  )
}
irAlDeckCarta(deck: Deck):void{
    console.log("ir al deck carta"+deck)
this.deckCartaService.disparadorDeDeck.next({
  data:deck

})

}
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  /*cargarImagen(id:number):any{
    let imagen: any= '';
    this.jugadorService.getImagen(id).subscribe(
      data =>{imagen = data;
        console.log("imagen"+imagen)
       this.imagenes.push(this.domSanitizer.bypassSecurityTrustUrl(imagen)) ;
      },
      err=>{console.log(err)}
    )
  }*/
  getSafeUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
