import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarRutasComponent } from './sidebar-rutas/sidebar-rutas.component';
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
import { ContenedorComponent } from './contenedor/contenedor.component';
import { InfoSeccionesComponent } from './info-secciones/info-secciones.component';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    SidebarRutasComponent,
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
    HomeComponent,
    ContenedorComponent,
    InfoSeccionesComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAOm-KmhlnD0YZjTqaHnRkPoSvA3ieyzRc'
    }),
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
