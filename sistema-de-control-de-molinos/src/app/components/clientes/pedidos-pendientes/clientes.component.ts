import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { UserService } from 'src/app/services/user.service';
import Swal, * as Jwal from 'sweetalert2';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  misPedidos:any=[];
  status:boolean=false;
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
    this.pedidoService.getPedidosFalse().subscribe(res=>{
      this.misPedidos=res as [];      
      
    });
  }
  aprobar(pedido:any){
    let date=  new Date();
    const milliseconds= new Date(date).getTime();
    let dateP = new Date(pedido.createdAt);
    const mills=dateP.getTime();
    const oneday = 60 * 60 * 24 * 1000;

    if(milliseconds-mills< oneday){
        this.pedidoService.setStatus(pedido._id).subscribe(res=>{
          Swal.fire({
            icon:'success',
            text:res.message
          }   
      )});
  
    }else{
      Swal.fire({
        icon:'warning',
        text:'La solicitud ha caducado'
      })   
      
    }
    this.cargarPedidos();
    
    
  }
  
  
    



}
