export class NuevoJugador {

  nombre: string;
  nombreUsuario: string;
  email: string;
  dci: string;
  password: string;
  authorities: string[];


  constructor(nombre: string, nombreUsuario: string, email: string, dci: string,password: string, authorities: string[]) {
    this.nombre = nombre;
    this.nombreUsuario = nombreUsuario;
    this.email = email;
    this.dci=dci;
    this.password = password;
    this.authorities = authorities;
  }
}
