import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class TorneoService {
  rutaBase = environment.URLbase;
  constructor(private httpClient: HttpClient,public domSanitizer: DomSanitizer) { }



  public postTorneos():Observable<any[]>{
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.httpClient.get<any[]>(this.rutaBase+"deckBuilder/getTorneos")
  }

  public postEnviarMazo(deckId: number, torneoId:number): Observable<any[]>{
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.httpClient.get<any[]>(this.rutaBase+"torneos/addJugadorTorneo?deckId="+deckId+"&torneoId="+torneoId);
  }

  public torneosByJugador(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.rutaBase+"torneos/getTorneoJugador")
  }
}
