import { Injectable } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";


@Injectable({
  providedIn: 'root'
})
export class NuevoDeckService {

  constructor( private httpClient:HttpClient, private toastr: ToastrService) { }


  public getFormatos():Observable<any[]>{
    return this.httpClient.get<any[]>("http://localhost:8080/deckBuilder/listaFormatos")
  }


  public addDeck( formato:string, nombreBaraja:string, mazo:any): Observable<any>{

    let deck: string = JSON.stringify(mazo)


    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

    return  this.httpClient.post<any[]>("http://localhost:8080/deckBuilder/add?formatoJson="+formato+"&nombreBaraja="+nombreBaraja,mazo,{headers:headers} )
  }
}
