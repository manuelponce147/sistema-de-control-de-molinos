import { Component, OnInit } from '@angular/core';
import { PesajeService } from 'src/app/services/pesaje.service';
import { Pesaje } from 'src/app/models/pesaje';
import {Global} from '../../../global';
@Component({
  selector: 'app-listar-pesajes',
  templateUrl: './listar-pesajes.component.html',
  styleUrls: ['./listar-pesajes.component.css'],
  providers:[PesajeService]
})
export class ListarPesajesComponent implements OnInit {
    public pesajes:Pesaje[];
    public url:string;

  constructor(private pesajeService:PesajeService) {
    this.url=Global.url;
   }

  ngOnInit(): void {
    this.getPesajes();
  }
  getPesajes(){
    this.pesajeService.obtenerPesajes().subscribe(
      response=>{
        if(response.pesajes){
          this.pesajes=response.pesajes;
        }
      },error=>{
        console.log(<any>error);
        
      }
    )
  }

}
