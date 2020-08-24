import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PesajeService } from 'src/app/services/pesaje.service';
import { Global } from '../../../global';
import * as jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as html2pdf from 'html2pdf.js';

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
  @ViewChild('content') content:ElementRef;



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
          this.pesajes = response;
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
  public downloadPDF(): void {
    let DATA = document.getElementById('htmlData');
    let pdf = new jsPDF({
      orientation: '1',
      unit: 'pt',
      format: 'a4'
    });
    pdf.text("Listado de Pesajes", 200, 30);
    autoTable(pdf, { html: '#htmlData' })
    pdf.save('angular-demo.pdf');
  }
 
  Search() {
    if (this.nombre != "") {
      this.pesajes = this.pesajes.filter(res => {
        return res.nombre.toLocaleLowerCase().match(this.nombre.toLocaleLowerCase());
      });
    } else if (this.nombre == "") {
      this.ngOnInit();
    }

  }
  public downloadPDFToday(): void {
    let pdf = new jsPDF({
      orientation: '2',
      unit: 'pt',
      format: 'a4'
    });

    let values: any;
    var pesajesToday:IPesaje[]=[];
    var todayDate = new Date().toISOString().slice(0,10);
    for(let i in this.pesajes) {
      let created=this.pesajes[i].createdAt.toString();
      let date =created.substr(0,10);
      if(date==todayDate){
        pesajesToday.push(this.pesajes[i]);
      }
      
    }
    
    for(let i in pesajesToday) {
      delete pesajesToday[i]['_id']
      delete pesajesToday[i]['razonSocial']
      delete pesajesToday[i]['pesoEntrada']
      delete pesajesToday[i]['pesoSalida']
      delete pesajesToday[i]['tipoVehiculo']
      delete pesajesToday[i]['updatedAt']
      delete pesajesToday[i]['createdAt']
      delete pesajesToday[i]['__v']

    }
    console.log(pesajesToday); 
    let data =pesajesToday;
    values = data.map( (elemento) => Object.values(elemento));

    pdf.text("Lista de pesajes del dia "+todayDate,180,30)
    autoTable(pdf,
      {
        head: [["Nombre","Rut","tipo de Transacción","Patente","Tipo de Producto"]],
        body: values  ,
      })

    console.log("Impresion PDF");
    pdf.save('pesajesdehoy.pdf');
  }
  public downloadUnique(): void{
    const options={
      filename:"detalles_de_pesaje.pdf",
      image:{type:'jpeg'},
      html2canvas:{}
    }
    const content:Element = document.getElementById('content');

    html2pdf()
      
      .from(content)
      .set(options)
      .save()

  }

}
  



