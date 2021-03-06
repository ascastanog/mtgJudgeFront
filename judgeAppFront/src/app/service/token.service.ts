import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
const TOKEN_KEY = 'AuthToken';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles: Array<string> = [];
  constructor(private router: Router) { }


  public setToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  /////aqui en concreto
  public getToken(): string {

    return localStorage.getItem(TOKEN_KEY)!;
  }

  public isLogged(): boolean{
    if(this.getToken()){
      return true;
    } else {
      return false;
    }
  }



  ///////////////////////////////////////////////////////////////////////////

  public getEmail(): string {
    if (!this.isLogged()){
      return "no te has loggeado";
    }
    const token = this.getToken();
    const payload = token.split('.')[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const email = values.sub;
    return email;
  }
  public isAdmin(): boolean {
    if (!this.isLogged()) {
      return false;
    }
    const token = this.getToken();
    const payload = token.split('.')[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const roles = values.roles;
    if (roles.includes('ROLE_ADMIN')) {
      return false;
    } else {
      return true;
    }
  }


  public logOut(): void {
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }





}


