import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Deck} from "../models/deck";

@Injectable({
  providedIn: 'root'
})
export class DeckCartaService {



   disparadorDeDeck:Subject<any>= new Subject<any>();


  constructor(private httpClient: HttpClient) { }

  public cargarDeckCarta(deckId:number):Observable<any>{
    return this.httpClient.get("http://localhost:8080/documento/cartasDeck?deckId="+deckId)
  }

}
