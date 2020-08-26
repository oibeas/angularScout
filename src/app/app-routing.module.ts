import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaRutasComponent } from './lista-rutas/lista-rutas.component';
import { DetalleRutaComponent } from './detalle-ruta/detalle-ruta.component';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import { InfoMovimientoComponent } from './info-movimiento/info-movimiento.component';
import { FormRutaComponent } from './form-ruta/form-ruta.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'rutas', component: ListaRutasComponent },
  { path: 'rutas/new', component: FormRutaComponent },
  { path: 'rutas/:rutaId', component: DetalleRutaComponent },
  { path: 'eventos', component: ListaEventosComponent },
  { path: 'eventos/new', component: FormEventoComponent },
  { path: 'eventos/eventoId', component: DetalleEventoComponent },
  { path: 'info', component: InfoMovimientoComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
