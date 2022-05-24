import { Component, OnInit } from '@angular/core';
import {NuevoDeckService} from "../../service/nuevo-deck.service";
import {Formato} from "../../models/formato";

@Component({
  selector: 'app-nuevo-deck',
  templateUrl: './nuevo-deck.component.html',
  styleUrls: ['./nuevo-deck.component.css']
})
export class NuevoDeckComponent implements OnInit {
formatos:Formato[]=[]
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
}
