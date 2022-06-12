import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Deck} from "../models/deck";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class DeckCartaService {
  rutaBase = environment.URLbase;


   disparadorDeDeck:Subject<any>= new Subject<any>();


  constructor(private httpClient: HttpClient) { }

  public cargarDeckCarta(deckId:number):Observable<any>{
    return this.httpClient.get(this.rutaBase+"documento/cartasDeck?deckId="+deckId)
  }

}
