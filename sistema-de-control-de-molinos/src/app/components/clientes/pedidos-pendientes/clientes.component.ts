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
  misPedidos:any;
  clientes:any;
  name:string;
  constructor(private pedidoService:PedidoService, private userService:UserService) { }
  ngOnInit(): void {
    this.cargarPedidos();
    this.cargarUsuarios();
    
  }
  cargarPedidos(){
    this.pedidoService.getPedidosFalse().subscribe(res=>{
      this.misPedidos=res;
      
    });
    document
  }
  cargarUsuarios(){
    this.userService.getUsers().subscribe(res=>{
      this.clientes=res;
      
    });
    
  }
  aprobar(pedido:any){
    this.verifyTime(pedido);
    this.pedidoService.setStatus(pedido._id).subscribe(res=>{ 
      Swal.fire({
        icon:'success',
        text:'La solicitud  ha sido aceptada'
      })     
    });
    this.cargarPedidos();
    
    
  }
  verifyTime(pedido){
    var date=new Date();
    var datePedido=new Date(pedido.createdAt);
    console.log(date, datePedido);
    
  }
  
    



}
