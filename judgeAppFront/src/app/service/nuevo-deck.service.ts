import { Injectable } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {DeckImagen} from "../models/deck-imagen";
import {environment} from "../../environments/environment.prod";


@Injectable({
  providedIn: 'root'
})
export class NuevoDeckService {
  rutaBase = environment.URLbase;
  constructor( private httpClient:HttpClient, private toastr: ToastrService) { }


  public getFormatos():Observable<any[]>{
    return this.httpClient.get<any[]>(this.rutaBase+"deckBuilder/listaFormatos")
  }


  public addDeck( formato:string, nombreBaraja:string, mazo:string, imagenBase:any): Observable<any>{
    let deck: string = JSON.stringify(mazo)
    console.log(JSON.stringify(mazo))
    console.log("mazo: "+mazo)
    console.log("imagenBase: "+imagenBase)
    let mazo2:string = "tornillo"
    let deckImagen = new DeckImagen(mazo,imagenBase);
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});


    console.log("add deck service")

    return  this.httpClient.post<any[]>(this.rutaBase+"deckBuilder/add?formatoJson="+formato+"&nombreBaraja="+nombreBaraja,deckImagen,{headers:headers})

  }
}
