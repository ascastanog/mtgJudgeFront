import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Deck} from "../models/deck";
import {environment} from "../../environments/environment.prod";


@Injectable({
  providedIn: 'root'
})
export class JugadorService {
rutaBase = environment.URLbase;
  constructor( private httpCLient: HttpClient) { }


  public getDecks():Observable<any[]>{
      return this.httpCLient.get<any[]>(this.rutaBase+"documento/mazos")
  }
 /* public getImagen(id: number):Observable<any[]>{
    const headers = new HttpHeaders({'Content-Type':'application/octet-stream; charset=utf-8'})

    return this.httpCLient.get<any[]>("http://localhost:8080/deckBuilder/imagen/"+id,{headers})
  }
*/
}

