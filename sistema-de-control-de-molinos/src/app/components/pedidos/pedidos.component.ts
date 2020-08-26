import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  idProduct:string;
  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  recibirId(id:string){
    this.idProduct=id;
    this.route.navigate(['/pedido/'+id]);
    
    
  }

}
