import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NuevoDeckService {

  constructor( private httpClient:HttpClient) { }


  public getFormatos():Observable<any[]>{
    return this.httpClient.get<any[]>("http://localhost:8080/deckBuilder/listaFormatos")
  }


  public addDeck( formato:string, nombreBaraja:string, mazo:string): Observable<any[]>{
    console.log("hemos llegado al addDeck del service")
    console.log("formato="+formato)
    console.log("nombreBaraja="+nombreBaraja)
    console.log("mazo"+mazo)
    return this.httpClient.post<any[]>("http://localhost:8080/deckBuilder/add?formatoJson="+formato+"&nombreBaraja="+nombreBaraja,mazo);
  }
}
