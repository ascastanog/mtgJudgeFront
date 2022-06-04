import { Component, OnInit } from '@angular/core';
import {NuevoDeckService} from "../../service/nuevo-deck.service";
import {Formato} from "../../models/formato";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

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
  constructor(private nuevoDeckService:NuevoDeckService, private toastr: ToastrService, private router:Router) { }

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


 return cantidadCarta;

  }
  enviarMazo():any{

  this.nuevoDeckService.addDeck(this.formato, this.nombreBaraja,this.formarJson()). subscribe(

      data=>{
        console.log("Cartas fallidas: "+data)
        if(data.length == 0){
          this.toastr.success(" La baraja ha sido guardada correctamente", 'Exito',{
            timeOut: 3000,  positionClass: 'toast-top-center',
          });

          this.router.navigate(['home-players'])
        }else {
          for (let i = 0; i<data.length; i++){
            this.toastr.error(data[i]+" no ha podido ser insertada", "Error",{
              timeOut: 3000,  positionClass: 'toast-top-center'})
          }
        }
      }, error =>{


      }

    );


  }


}
