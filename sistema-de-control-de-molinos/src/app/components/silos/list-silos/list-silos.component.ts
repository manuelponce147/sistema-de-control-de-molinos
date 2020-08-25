import { Component, OnInit, Input } from '@angular/core';
import { SiloService } from 'src/app/services/silo.service';
import { ISilo } from 'src/app/interfaces/silo';
import * as jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-silos',
  templateUrl: './list-silos.component.html',
  styleUrls: ['./list-silos.component.css']
})
export class ListSilosComponent implements OnInit {
  silos:ISilo[]=[];
  formSilo: FormGroup;
  details: FormGroup;
  status:boolean;
  @Input() progreso:any;
  constructor(private siloService:SiloService , private formBuilder: FormBuilder) {
    this.formSilo = this.formBuilder.group({
      nombre:['',[Validators.required]],
      capacidadTotal:['',[Validators.required]],
      stock:['',[Validators.required]],
      tipoProducto:['',[Validators.required]],
      estado:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.obtenerSilos();

    if (this.silos.length==0) {
      this.status=true;      
    }else{
      this.status=false;
    }
    
  }
  obtenerSilos(){
    this.siloService.getSilos()
      .subscribe(res => {
        this.silos = res;

      }
        );

  }
  public downloadPDF():void {
    let DATA = document.getElementById('dataSilos');
    let pdf = new jsPDF({
      orientation:'1',
      unit:'pt',
      format:'a4'
    });
    pdf.text("Listado de Silos ",200,30);
    autoTable(pdf, { html: '#dataSilos' })
    pdf.save('angular-demo.pdf');
  }
  cargarDatos(silo: any) {
    this.formSilo = this.formBuilder.group({
      nombre: silo.nombre,
      capacidadTotal: silo.capacidadTotal,
      stock: silo.stock,
      tipoProducto: silo.tipoProducto,
      estado: silo.estado

    });
    this.progreso = (silo.stock*100 )/ silo.capacidadTotal ;
  }
  VerSilo(event: Event, silo: any) {
    event.preventDefault();
    this.cargarDatos(silo);

  }
}
