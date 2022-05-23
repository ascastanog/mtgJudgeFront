import { Injectable } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {catchError, concatMap, Observable, throwError} from "rxjs";
import {TokenService} from "../service/token.service";
import {JwtDto} from "../models/jwt-dto";
const AUTHORIZATION = 'Authorization';


@Injectable({
  providedIn: 'root'
})
export class ProdInterceptorService {


  constructor(private tokenService: TokenService, private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.tokenService.isLogged()) {
      return next.handle(req);
    }

    let intReq = req;
    const token = this.tokenService.getToken();
    intReq = this.addToken(req, token);


    return next.handle(intReq).pipe(catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        const dto: JwtDto = new JwtDto(this.tokenService.getToken());
        return this.authService.refresh(dto).pipe(concatMap((data: any) => {
          console.log('refreshing...');
          this.tokenService.setToken(data.token);
          intReq = this.addToken(req, data.token);
          return next.handle(intReq);
        }));

      } else {
       // this.tokenService.logOut();
        return throwError(err);
      }
    }));
  }
  private addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {

    return req.clone(({headers: req.headers.set(AUTHORIZATION, 'Bearer ' + token) }));
  }

}
export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: ProdInterceptorService, multi: true}];
