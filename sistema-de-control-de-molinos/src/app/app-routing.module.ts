import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoPesajeComponent } from './components/pesajes/nuevo-pesaje/nuevo-pesaje.component';
import { DeshabilitarPesajeComponent } from './components/pesajes/deshabilitar-pesaje/deshabilitar-pesaje.component';
import { SilosComponent } from './components/silos/silos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';
import { ListarPesajesComponent } from './components/pesajes/listar-pesajes/listar-pesajes.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pesajes/nuevo-pesaje', component: NuevoPesajeComponent },
  { path: 'pesajes/deshabilitar-pesaje', component: DeshabilitarPesajeComponent },
  { path: 'silos', component: SilosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path:'pesajes/listar-pesaje',component:ListarPesajesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
