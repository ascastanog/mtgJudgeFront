import {HttpClient, HttpHeaders} from '@angular/common/http';
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
 /* public getImagen(id: number):Observable<any[]>{
    const headers = new HttpHeaders({'Content-Type':'application/octet-stream; charset=utf-8'})

    return this.httpCLient.get<any[]>("http://localhost:8080/deckBuilder/imagen/"+id,{headers})
  }
*/
}

