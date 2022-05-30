import { Injectable } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class NuevoDeckService {

  constructor( private httpClient:HttpClient) { }


  public getFormatos():Observable<any[]>{
    return this.httpClient.get<any[]>("http://localhost:8080/deckBuilder/listaFormatos")
  }


  public addDeck( formato:string, nombreBaraja:string, mazo:any): Subscription{
    console.log("hemos llegado al addDeck del service")
    console.log("formato="+formato)
    console.log("nombreBaraja="+nombreBaraja)
    console.log("mazo"+mazo)
    console.log(mazo.toString())
    let deck: string = JSON.stringify(mazo)
    console.log("deck en el service:"+deck)

    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

    return  this.httpClient.post<any[]>("http://localhost:8080/deckBuilder/add?formatoJson="+formato+"&nombreBaraja="+nombreBaraja,mazo,{headers:headers} ).subscribe(
      data=>{
        console.log("galleta")
      }
    );
  }
}
