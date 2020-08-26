import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { UserService } from 'src/app/services/user.service';
import Swal, * as Jwal from 'sweetalert2';
import * as jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { empty } from 'rxjs';
@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {
  misPedidos:any;
  name:string;
  status:boolean;
  constructor(private pedidoService:PedidoService, private userService:UserService) { }
  ngOnInit(): void {
    this.cargarPedidos(); 
    if (this.misPedidos.length==0) {
      this.status=true;      
    }else{
      this.status=false;
    }
  }
  cargarPedidos(){
    this.pedidoService.getPedidos().subscribe(res=>{
      this.misPedidos=res;
      
    });
    
    
  }
  public downloadPDF():void {
    let DATA = document.getElementById('table-pedidos');
    let pdf = new jsPDF({
      orientation:'1',
      unit:'pt',
      format:'a4'
    });
    pdf.text("Listado de Pedidos ",200,30);
    autoTable(pdf, { html: '#table-pedidos' })
    pdf.save('angular-demo.pdf');
  }
}
