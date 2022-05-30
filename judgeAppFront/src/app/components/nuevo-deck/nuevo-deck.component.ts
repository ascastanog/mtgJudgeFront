import { Component, OnInit } from '@angular/core';
import {NuevoDeckService} from "../../service/nuevo-deck.service";
import {Formato} from "../../models/formato";
import {FormControl} from "@angular/forms";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-nuevo-deck',
  templateUrl: './nuevo-deck.component.html',
  styleUrls: ['./nuevo-deck.component.css']
})
export class NuevoDeckComponent implements OnInit {
formatos:Formato[]=[];
textArea:string="";
formato: string = "";
nombreBaraja: string = "";
Json:string="";
  constructor(private nuevoDeckService:NuevoDeckService) { }

  ngOnInit(): void {
  this.cargarFormatos()


  }
  cargarFormatos():void{
    this.nuevoDeckService.getFormatos().subscribe(
      data =>{this.formatos = data;
        console.log(this.formatos)
      },
      err=>{console.log(err)}
    )
  }

  formarJson():any{
  let cadena = this.textArea
    let cantidadCarta: any[]=[]
    let objeto: {};
   let mainSide:string[] =cadena.split("SIDEBOARD")

    let lineaMain :string [] = mainSide[0].split("\n")
    for( let i = 0; i<lineaMain.length; i++){
      let control: string []=lineaMain[i].split(" X ")
      console.log("control[0]"+control[0])
      console.log("control[1]: "+control[1])
   /*   console.log("carta: control[0],"+ control[0],)*/
      if(control[1] != undefined){

      cantidadCarta.push({
        carta:control[1],
        cantidad:control[0],
        sideboard:false
      })
      }
    }


    let lineaSide :string [] = mainSide[1].split("\n")
    for( let i = 0; i<lineaSide.length; i++) {
      let control: string [] = lineaSide[i].split(" X ")
      console.log("control[0]"+control[0])
      console.log("control[1]: "+control[1])
      /*      console.log("carta: control[0],"+ control[1],)*/
      if ( control[1] != undefined) {
        cantidadCarta.push({
          carta: control[1],
          cantidad: control[0],
          sideboard: true
        })

      }
    }
//console.log(JSON.stringify(cantidadCarta[0]))

//console.log("linea: "+linea);
//console.log("cantidadCarta: "+JSON.stringify(cantidadCarta))
/*console.log("textArea: "+this.textArea);*/
    console.log("cantidadCarta: "+JSON.stringify(cantidadCarta))
 return cantidadCarta;

  }
  enviarMazo():any{
  console.log("enviar mazo hecho")
    console.log("formato ts"+this.formato);
    console.log("nombreBaraja ts: "+this.nombreBaraja)
    console.log("formar JSON:"+this.formarJson())
    this.nuevoDeckService.addDeck(this.formato, this.nombreBaraja,this.formarJson())

  }


}
