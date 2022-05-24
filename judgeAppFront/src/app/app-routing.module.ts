import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { IndexComponent } from './index/index.component';
import {LoginComponent} from "./components/login/login.component";
import {HomePlayersComponent} from "./components/home-players/home-players.component";
import { NuevoJugadorComponent } from './components/nuevo-jugador/nuevo-jugador.component';

import { CartasDeckComponent } from './components/cartas-deck/cartas-deck.component';
import {NuevoDeckComponent} from "./components/nuevo-deck/nuevo-deck.component";

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'login',component: LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'home-players', component: HomePlayersComponent},
  {path:'nuevo-usuario', component: NuevoJugadorComponent},
  {path: 'cartas-deck', component: CartasDeckComponent},
  {path: 'nuevo-deck', component: NuevoDeckComponent},


  {path:'**', redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
