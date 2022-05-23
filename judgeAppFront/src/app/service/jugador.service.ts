import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Deck} from "../models/deck";

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor( private httpCLient: HttpClient) { }


  public getDecks():Observable<any[]>{
      return this.httpCLient.get<any[]>("http://localhost:8080/documento/mazos")
  }


}
