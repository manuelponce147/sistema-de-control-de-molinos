import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoPesajeComponent } from './components/pesajes/nuevo-pesaje/nuevo-pesaje.component';
import { DeshabilitarPesajeComponent } from './components/pesajes/deshabilitar-pesaje/deshabilitar-pesaje.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';
import { ListarPesajesComponent } from './components/pesajes/listar-pesajes/listar-pesajes.component';
import { ErrorComponent } from './components/error/error.component';
import { PhotoListComponent } from './components/photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './components/photos/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './components/photos/photo-preview/photo-preview.component';
import { ListSilosComponent } from './components/silos/list-silos/list-silos.component';
import { CreateSiloComponent } from './components/silos/create-silo/create-silo.component';
import { ConfigureSiloComponent } from './components/silos/configure-silo/configure-silo.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from "./guards/auth.guard";
import { UserComponent } from './components/user/user.component';
import { UserAdminGuard } from './guards/user-admin.guard';
import { UserEncargadoGuard } from './guards/user-encargado.guard';

import { AuthService } from './services/auth.service';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { CreatePedidosComponent } from './components/pedidos/create-pedidos/create-pedidos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'

  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'catalogo',
    component: PhotoListComponent,
    canActivate: [AuthGuard,UserEncargadoGuard]
  },

  { path: 'signup', 
    component: SignupComponent

  },
  {
    path: 'pesajes/nuevo-pesaje',
    component: NuevoPesajeComponent,
    canActivate: [AuthGuard,UserEncargadoGuard]


  },
  {
    path: 'pesajes/deshabilitar-pesaje', 
    component: DeshabilitarPesajeComponent, 
    canActivate: [AuthGuard,UserEncargadoGuard]  },
  {
    path: 'clientes', 
    component: ClientesComponent, 
    canActivate: [AuthGuard,UserEncargadoGuard]
  },
  {
    path: 'pesajes/listar-pesaje', 
    component: ListarPesajesComponent,
    canActivate: [AuthGuard,UserEncargadoGuard]
  },
  { path: 'home',
   component: HomeComponent 


  },
  {
    path:'pedidos',
    component:PedidosComponent
  },
  {
    path:'pedido/:id',
    component:CreatePedidosComponent
  }
  ,
  {
    path: 'catalogo/new', 
    component: PhotoFormComponent, 
    canActivate: [AuthGuard,UserEncargadoGuard]
  },
  {
    path: 'catalogo/:id', 
    component: PhotoPreviewComponent, 
    canActivate: [AuthGuard,UserEncargadoGuard]
  },
  {
    path: 'silos', 
    component: ListSilosComponent,
    canActivate: [AuthGuard,UserEncargadoGuard]
  },

  {
    path: 'silos/new', 
    component: CreateSiloComponent, 
    canActivate: [AuthGuard,UserEncargadoGuard]
  },
  {
    path: 'silos/:id', 
    component: ConfigureSiloComponent, 
    canActivate: [AuthGuard,UserEncargadoGuard]
  },



  {
    path:'user',
    component:UserComponent,
    canActivate: [AuthGuard,UserAdminGuard]
  
  },




  { path: '**', component: ErrorComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
