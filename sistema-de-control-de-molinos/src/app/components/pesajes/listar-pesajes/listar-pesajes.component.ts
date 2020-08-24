import { Component, OnInit } from '@angular/core';
import { PesajeService } from 'src/app/services/pesaje.service';
import { Pesaje } from 'src/app/models/pesaje';
import { Global } from '../../../global';
import * as jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPesaje } from 'src/app/interfaces/pesaje';
@Component({
  selector: 'app-listar-pesajes',
  templateUrl: './listar-pesajes.component.html',
  styleUrls: ['./listar-pesajes.component.css'],
  providers: [PesajeService]
})
export class ListarPesajesComponent implements OnInit {
  public pesajes: IPesaje[];
  public url: string;
  formPesaje: FormGroup;
  details: FormGroup;
  nombre: string;
  rut: string;
  patente: string;
  formFiltrado: FormGroup;



  constructor(private pesajeService: PesajeService, private formBuilder: FormBuilder) {
    this.url = Global.url;
    this.formPesaje = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      rut: ['', [Validators.required]],
      razonSocial: ['', [Validators.required]],
      pesoEntrada: ['', [Validators.required]],
      pesoSalida: ['', [Validators.required]],
      tipoTransaccion: ['', Validators.required],
      patente: ['', Validators.required],
      tipoVehiculo: ['', Validators.required],
      tipoProducto: ['', Validators.required],


    })
    this.url = Global.url;

  }

  ngOnInit(): void {
    this.getPesajes();
  }
  getPesajes() {
    this.pesajeService.obtenerPesajes().subscribe(
      response => {
        if (response) {
          this.pesajes=response;
          console.log(response);

        }
      }, error => {
        console.log(<any>error);

      }
    )
  }
  cargarDatos(pesaje: any) {
    this.formPesaje = this.formBuilder.group({
      nombre: pesaje.nombre,
      rut: pesaje.rut,
      razonSocial: pesaje.razonSocial,
      pesoEntrada: pesaje.pesoEntrada,
      pesoSalida: pesaje.pesoSalida,
      tipoTransaccion: pesaje.tipoTransaccion,
      patente: pesaje.patente,
      tipoVehiculo: pesaje.tipoVehiculo,
      tipoProducto: pesaje.tipoProducto
    });
  }
  cargarpdf(pesaje: any) {
    this.details = this.formBuilder.group({
      nombre: pesaje.nombre,
      rut: pesaje.rut,
      razonSocial: pesaje.razonSocial,
      pesoEntrada: pesaje.pesoEntrada,
      pesoSalida: pesaje.pesoSalida,
      tipoTransaccion: pesaje.tipoTransaccion,
      patente: pesaje.patente,
      tipoVehiculo: pesaje.tipoVehiculo,
      tipoProducto: pesaje.tipoProducto
    });


  }
  VerPesaje(event: Event, pesaje: any) {
    event.preventDefault();
    this.cargarDatos(pesaje);

  }
  public downloadPDF():void {
    let DATA = document.getElementById('htmlData');
    let pdf = new jsPDF({
      orientation:'1',
      unit:'pt',
      format:'a4'
    });
    pdf.text("Listado de Pesajes",200,30);
    autoTable(pdf, { html: '#htmlData' })
    pdf.save('angular-demo.pdf');
  }
  Search(){
    if(this.nombre != ""){
      this.pesajes = this.pesajes.filter(res=>{
        return res.nombre.toLocaleLowerCase().match(this.nombre.toLocaleLowerCase());
      });
    }else if(this.nombre == ""){
        this.ngOnInit();
    }

  }



}
