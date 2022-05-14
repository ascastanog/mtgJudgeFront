export class JwtDto {
  token: string ;
 /* type: string| undefined;
  nombreUsuario: string| undefined;
  authorities: string[]| undefined;*/


  constructor(token: string) {
    this.token = token;
  }
}
