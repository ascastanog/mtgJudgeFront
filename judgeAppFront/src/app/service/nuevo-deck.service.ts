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

}
