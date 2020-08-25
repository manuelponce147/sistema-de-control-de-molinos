import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
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
  public pesajes: IPesaje[]=[];
  public url: string;
  formPesaje: FormGroup;
  details: FormGroup;
  nombre: string;
  rut: string;
  fechaa: Date;
  dia:number;
  mes:number;
  anio:number;
  fecha: Date;
  patente: string;
  formFiltrado: FormGroup;
  status:boolean;
  @ViewChild('content') content: ElementRef;



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
    this.verify();
    

  }
  verify(){
    if (this.pesajes.length!=0) {
      this.status=true;      
    }else{
      this.status=false;
    }
  }
  getPesajes() {
    this.pesajeService.obtenerPesajes().subscribe(
      response => {
        if (response) {
          this.pesajes = response;
          


        }
      }, err => {
          console.log(err);
          
      }
    );
    this.verify();
   
    
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

  searchNombre() {
    if (this.nombre != "") {
      this.pesajes = this.pesajes.filter(res => {
        return res.nombre.toLocaleLowerCase().match(this.nombre.toLocaleLowerCase());
      });
    } else if (this.nombre == "") {
      this.ngOnInit();
    }

  }
  searchRut() {
    if (this.rut != "") {
      this.pesajes = this.pesajes.filter(res => {
        return res.rut.toLocaleLowerCase().match(this.rut.toLocaleLowerCase());
      });
    } else if (this.rut == "") {
      this.ngOnInit();
    }

  }
  searchPatente() {
    if (this.patente != "") {
      this.pesajes = this.pesajes.filter(res => {
        return res.patente.toLocaleLowerCase().match(this.patente.toLocaleLowerCase());
      });
    } else if (this.patente == "") {
      this.ngOnInit();
    }

  }
  searchFecha() {
    if (this.fecha != null) {
      this.pesajes = this.pesajes.filter(res => {
        return res.createdAt.toString().match(this.fecha.toString());

      });
    } else if (this.fecha == null) {
      this.ngOnInit();
    }

  }

  changeFilter(value: string) {
    const inputName = document.getElementById('filterName');
    const inputRut = document.getElementById('filterRut');
    const inputPatente = document.getElementById('filterPatente');
    const inputFecha = document.getElementById('filterFecha');

    if (value == "nombre") {
      this.ngOnInit();
      inputName.style.display = "";
      inputRut.style.display = "none";
      inputPatente.style.display = "none";
      inputFecha.style.display = "none";
      this.fecha = null;
      this.nombre = "";
      this.patente = "";
      this.rut = "";
    } else {
      if (value == "rut") {
        this.ngOnInit();
        inputName.style.display = "none";
        inputRut.style.display = "";
        inputPatente.style.display = "none";
        inputFecha.style.display = "none";
        this.fecha = null;
        this.nombre = "";
        this.patente = "";
        this.rut = "";
      } else {
        if (value == "patente") {
          this.ngOnInit();
          inputName.style.display = "none";
          inputRut.style.display = "none";
          inputPatente.style.display = "";
          inputFecha.style.display = "none";
          this.fecha = null;
          this.nombre = "";
          this.patente = "";
          this.rut = "";
        } else {
          if (value == "fecha") {
            this.ngOnInit();
            inputName.style.display = "none";
            inputRut.style.display = "none";
            inputPatente.style.display = "none";
            inputFecha.style.display = "";
            this.fecha = null;
            this.nombre = "";
            this.patente = "";
            this.rut = "";
          }
        }
      }
    }


  }
  public downloadPDFToday(): void {
    let pdf = new jsPDF({
      orientation: '2',
      unit: 'pt',
      format: 'a4'
    });

    let values: any;
    var pesajesToday: IPesaje[] = [];
    var todayDate = new Date().toISOString().slice(0, 10);
    for (let i in this.pesajes) {
      let created = this.pesajes[i].createdAt.toString();
      let date = created.substr(0, 10);
      if (date == todayDate) {
        pesajesToday.push(this.pesajes[i]);
      }

    }

    for (let i in pesajesToday) {
      delete pesajesToday[i]['_id']
      delete pesajesToday[i]['razonSocial']
      delete pesajesToday[i]['pesoEntrada']
      delete pesajesToday[i]['pesoSalida']
      delete pesajesToday[i]['tipoVehiculo']
      delete pesajesToday[i]['updatedAt']
      delete pesajesToday[i]['createdAt']
      delete pesajesToday[i]['__v']

    }
    let data = pesajesToday;
    values = data.map((elemento) => Object.values(elemento));

    pdf.text("Lista de pesajes del dia " + todayDate, 180, 30)
    autoTable(pdf,
      {
        head: [["Nombre", "Rut", "tipo de Transacción", "Patente", "Tipo de Producto"]],
        body: values,
      })

    pdf.save('pesajesdehoy.pdf');
  }
  public downloadUnique(): void {
    const options = {
      filename: "detalles_de_pesaje.pdf",
      image: { type: 'jpeg' },
      html2canvas: {}
    }
    const content: Element = document.getElementById('content');

    html2pdf()

      .from(content)
      .set(options)
      .save()

  }

}




