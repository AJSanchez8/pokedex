import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  tipos_api:any;
  url:string="https://pokeapi.co/api/v2/"

clienteService = inject(ClienteService)
http = inject(HttpClient)
cli = inject(ClienteService)

response:any

ngOnInit(): void {
  this.http.get(this.url+"type/").subscribe((response)=>{
    this.tipos_api=response
    this.tipos_api=this.tipos_api["results"]      
  })
  }
}
