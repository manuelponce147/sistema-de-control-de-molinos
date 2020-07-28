import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoPesajeComponent } from './components/pesajes/nuevo-pesaje/nuevo-pesaje.component';
import { DeshabilitarPesajeComponent } from './components/pesajes/deshabilitar-pesaje/deshabilitar-pesaje.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';
import { ListarPesajesComponent } from './components/pesajes/listar-pesajes/listar-pesajes.component';
import { ErrorComponent } from './components/error/error.component';
import { NuevoPedidoComponent } from './components/pedido/nuevo-pedido/nuevo-pedido.component';
import { PhotoListComponent } from './components/photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './components/photos/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './components/photos/photo-preview/photo-preview.component';
import { ListSilosComponent } from './components/silos/list-silos/list-silos.component';
import { CreateSiloComponent } from './components/silos/create-silo/create-silo.component';
import { ConfigureSiloComponent } from './components/silos/configure-silo/configure-silo.component';


const routes: Routes = [
  { path: 'pesajes/nuevo-pesaje', component: NuevoPesajeComponent },
  { path: 'pesajes/deshabilitar-pesaje', component: DeshabilitarPesajeComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'pesajes/listar-pesaje', component: ListarPesajesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pedido/nuevo-pedido', component: NuevoPedidoComponent },
  { path: 'catalogo', component: PhotoListComponent },
  { path: 'catalogo/new', component: PhotoFormComponent },
  { path: 'catalogo/:id', component: PhotoPreviewComponent },
  {path:'silos',component:ListSilosComponent},
  {path:'silos/new',component:CreateSiloComponent},
  {path:'silos/:id',component:ConfigureSiloComponent},



  { path: '**', component: ErrorComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
