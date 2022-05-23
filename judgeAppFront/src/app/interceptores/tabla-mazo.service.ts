import {EventEmitter, Injectable, Output} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TablaMazoService {
 disparadorDeckCarta:Subject<any>= new Subject<any>();

 /* disparadorDeTablaMazo:Subject<any>= new Subject<any>();*/
  constructor() { }
}
