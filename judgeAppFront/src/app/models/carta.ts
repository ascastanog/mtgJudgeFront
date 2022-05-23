export class Carta {
 id:number;
 nombre:string;
  cmc:number;
  numeroColeccion:number;
  dibujante:string;
  tipo:string;
  imagen:string;


  constructor(id: number, nombre: string, cmc: number, numeroColeccion: number, dibujante: string, tipo: string, imagen: string) {
    this.id = id;
    this.nombre = nombre;
    this.cmc = cmc;
    this.numeroColeccion = numeroColeccion;
    this.dibujante = dibujante;
    this.tipo = tipo;
    this.imagen = imagen;
  }


}
