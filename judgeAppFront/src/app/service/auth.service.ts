import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginJugador} from "../models/login-usuario";
import {NuevoJugador} from "../models/nuevo-jugador";
import {JwtDto} from "../models/jwt-dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.authURL;
  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoJugador: NuevoJugador): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoJugador);
  }
  public login(loginJugador: LoginJugador): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginJugador);
  }

  public refresh(dto: JwtDto): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'refresh', dto);
  }



}
