import { Component, OnInit } from '@angular/core';
import { SiloService } from 'src/app/services/silo.service';
import { Silo } from 'src/app/models/silos';
import * as jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-silos',
  templateUrl: './list-silos.component.html',
  styleUrls: ['./list-silos.component.css']
})
export class ListSilosComponent implements OnInit {
  silos:Silo=[];
  constructor(private siloService:SiloService) { 
  }

  ngOnInit(): void {
    this.obtenerSilos()
  }
  obtenerSilos(){
    this.siloService.getSilos()
      .subscribe(res => {
        this.silos = res;
        console.log(this.silos);
        
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
  
}
