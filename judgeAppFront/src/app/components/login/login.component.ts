import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {LoginJugador} from "../../models/login-usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  loginJugador: LoginJugador;
  // @ts-ignore
  email: string ;
  // @ts-ignore
  password: string;
  // @ts-ignore
  errMsj: string;

  control:boolean=false;
  constructor(private tokenService: TokenService,
              private authService: AuthService,
              private router: Router,
            //  private toastr: ToastrService
  ) { }

  ngOnInit(): void {

  }


  cambiar(){
    this.control=!this.control;
  }

  onLogin(): void {
   // console.log("ha hecho el submit")
    this.loginJugador = new LoginJugador(this.email, this.password);
    this.authService.login(this.loginJugador).subscribe(
      data => {


        this.tokenService.setToken(data.token);
        this.router.navigate(['/home-players']);

      },
      err => {
        this.errMsj = err.error.message;
      //  this.toastr.error(this.errMsj, 'No ha sido posible logearse', {
        //  timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    //);
 // }

  nuevoUsuario(){
    this.router.navigate(['/nuevo-usuario'])
  }

}
