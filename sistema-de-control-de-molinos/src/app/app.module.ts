import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NuevoPesajeComponent } from './components/pesajes/nuevo-pesaje/nuevo-pesaje.component';
import { RouterModule } from '@angular/router';
import { DeshabilitarPesajeComponent } from './components/pesajes/deshabilitar-pesaje/deshabilitar-pesaje.component';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListarPesajesComponent } from './components/pesajes/listar-pesajes/listar-pesajes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { NuevoPedidoComponent } from './components/pedido/nuevo-pedido/nuevo-pedido.component';
import { ErrorComponent } from './components/error/error.component';
import { PhotoFormComponent } from './components/photos/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './components/photos/photo-preview/photo-preview.component';
import { PhotoListComponent } from './components/photos/photo-list/photo-list.component';
import { ListSilosComponent } from './components/silos/list-silos/list-silos.component';
import { CreateSiloComponent } from './components/silos/create-silo/create-silo.component';
import { ConfigureSiloComponent } from './components/silos/configure-silo/configure-silo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    NuevoPesajeComponent,
    DeshabilitarPesajeComponent,
    HomeComponent,
    ClientesComponent,
    ListarPesajesComponent,
    NuevoPedidoComponent,
    ErrorComponent,
    PhotoFormComponent,
    PhotoPreviewComponent,
    PhotoListComponent,
    ListSilosComponent,
    CreateSiloComponent,
    ConfigureSiloComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    CommonModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
