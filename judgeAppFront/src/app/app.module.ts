import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import {LoginComponent} from "./components/login/login.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PasswordPipe } from './pipes/password.pipe';
import { HomePlayersComponent } from './components/home-players/home-players.component';
import { NuevoJugadorComponent } from './components/nuevo-jugador/nuevo-jugador.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import {interceptorProvider} from "./interceptors/prod-interceptor.service";

import { CartasDeckComponent } from './components/cartas-deck/cartas-deck.component';
import { TablaMazoComponent } from './components/tabla-mazo/tabla-mazo.component';
import { NuevoDeckComponent } from './components/nuevo-deck/nuevo-deck.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    PasswordPipe,
    HomePlayersComponent,
    NuevoJugadorComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    CartasDeckComponent,
    TablaMazoComponent,
    NuevoDeckComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
