import { Component, OnInit } from '@angular/core';
import {Deck} from "../../models/deck";
import {JugadorService} from "../../service/jugador.service";
import {DeckCartaService} from "../../interceptores/deck-carta.service";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {TorneoService} from "../../service/torneo.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.component.html',
  styleUrls: ['./torneo.component.css']
})
export class TorneoComponent implements OnInit {
  decks:Deck[]=[];
  imagenes:any[]=[];
  torneos:any[]=[];
  deckId:number = 0;
  torneoId: number =0;
  mostrar:boolean= false;
  claseTitular = "card-body"

  constructor(private jugadorService: JugadorService, private deckCartaService: DeckCartaService, private torneoService: TorneoService, private router:Router,public domSanitizer: DomSanitizer, private toast:ToastrService ) { }

  ngOnInit(): void {
    this.cargarDecks();
    this.cargarTorneos();

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
    console.log("ir al deck carta"+deck)
    this.deckCartaService.disparadorDeDeck.next({
      data:deck

    })

  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

 cargarTorneos(){
    this.torneoService.postTorneos().subscribe(
      data =>{
        this.torneos = data;
        console.log(this.torneos)
      }
    )

 }
  getSafeUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  enviarMazo(){
    this.torneoService.postEnviarMazo(this.deckId, this.torneoId).subscribe(
      data =>{
        this.toast.success();
      }

    )

  }
  cambiaEstado() {
    this.claseTitular = "class2"
  }

}
