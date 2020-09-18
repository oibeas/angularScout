import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListaRutasComponent } from './lista-rutas/lista-rutas.component';
import { DetalleRutaComponent } from './detalle-ruta/detalle-ruta.component';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import { InfoMovimientoComponent } from './info-movimiento/info-movimiento.component';
import { FormRutaComponent } from './form-ruta/form-ruta.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import { HomeComponent } from './home/home.component';
import { MapaGruposComponent } from './mapa-grupos/mapa-grupos.component';
import { InfoSeccionesComponent } from './info-secciones/info-secciones.component';
import { LoginGuard } from './login.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'rutas', component: ListaRutasComponent },
  { path: 'rutas/new', component: FormRutaComponent, canActivate: [LoginGuard] },
  { path: 'rutas/:rutaId', component: DetalleRutaComponent, canActivate: [LoginGuard] },
  { path: 'eventos', component: ListaEventosComponent },
  { path: 'eventos/new', component: FormEventoComponent, canActivate: [LoginGuard] },
  { path: 'eventos/:eventoId', component: DetalleEventoComponent, canActivate: [LoginGuard] },
  { path: 'grupos', component: MapaGruposComponent },
  // { path: 'grupos/:grupoId', component: ListaRutasComponent },
  { path: 'info', component: InfoMovimientoComponent },
  { path: 'secciones', component: InfoSeccionesComponent },
  { path: '**', redirectTo: '/home' }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollOffset: [0, 80], //Este es el espacio del navbar para que el scroll no tape el titulo del componente listarutas o listaeventos
};

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
