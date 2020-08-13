import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-pedidos',
  templateUrl: './list-pedidos.component.html',
  styleUrls: ['./list-pedidos.component.css']
})
export class ListPedidosComponent implements OnInit {
  misPedidos:any;
  id:string;
  constructor(private pedidoService:PedidoService,private authService:AuthService) { }
  
  ngOnInit(): void {
    this.id= this.authService.getUserID();
    this.pedidoService.getMisPedidos(this.id).subscribe(res=>{
      this.misPedidos = res;
      console.log(this.misPedidos);
      
    },
    err=> console.log(err)
    );
  }

}
