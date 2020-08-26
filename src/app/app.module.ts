import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarRutasComponent } from './sidebar-rutas/sidebar-rutas.component';
import { HomeRutasComponent } from './home-rutas/home-rutas.component';
import { HomeEventosComponent } from './home-eventos/home-eventos.component';
import { SidebarEventosComponent } from './sidebar-eventos/sidebar-eventos.component';
import { MapaGruposComponent } from './mapa-grupos/mapa-grupos.component';
import { ListaRutasComponent } from './lista-rutas/lista-rutas.component';
import { DetalleRutaComponent } from './detalle-ruta/detalle-ruta.component';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import { InfoMovimientoComponent } from './info-movimiento/info-movimiento.component';
import { FormRutaComponent } from './form-ruta/form-ruta.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    SidebarRutasComponent,
    HomeRutasComponent,
    HomeEventosComponent,
    SidebarEventosComponent,
    MapaGruposComponent,
    ListaRutasComponent,
    DetalleRutaComponent,
    ListaEventosComponent,
    DetalleEventoComponent,
    InfoMovimientoComponent,
    FormRutaComponent,
    FormEventoComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
