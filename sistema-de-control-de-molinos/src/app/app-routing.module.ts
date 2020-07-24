import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoPesajeComponent } from './components/pesajes/nuevo-pesaje/nuevo-pesaje.component';
import { EditarPesajeComponent } from './components/pesajes/editar-pesaje/editar-pesaje.component';
import { DeshabilitarPesajeComponent } from './components/pesajes/deshabilitar-pesaje/deshabilitar-pesaje.component';
import { SilosComponent } from './components/silos/silos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';
import { PedidoComponent } from './components/pedido/pedido.component';


const routes: Routes = [
  { path: 'components/pesajes/nuevo-pesaje', component: NuevoPesajeComponent },
  { path: 'components/pesajes/editar-pesaje', component: EditarPesajeComponent },
  { path: 'components/pesajes/deshabilitar-pesaje', component: DeshabilitarPesajeComponent },
  { path: 'components/silos', component: SilosComponent },
  { path: 'components/clientes', component: ClientesComponent },
  { path: 'components/home', component: HomeComponent },
  { path: 'components/pedido', component: PedidoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
