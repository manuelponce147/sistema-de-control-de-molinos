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
      console.log(res);
      
      
    });
  }
  cargarUsuarios(){
    this.userService.getUsers().subscribe(res=>{
      this.clientes=res;
      
    });
    
  }
  aprobar(pedido:any){
    this.pedidoService.setStatus(pedido._id).subscribe(res=>{ 
      Swal.fire({
        icon:'success',
        text:'La solicitud  ha sido aceptada'
      })     
    });
    this.cargarPedidos();
    
    
  }
  
  
    



}
