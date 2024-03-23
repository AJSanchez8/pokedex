import { Component, inject, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  tipos_api:any;
  url:string="https://pokeapi.co/api/v2/"

pokeapiService = inject(PokeapiService)
http = inject(HttpClient)

response:any

ngOnInit(): void {
    this.http.get(this.url+"type/").subscribe((response)=>{
      this.tipos_api=response
      this.tipos_api=this.tipos_api["results"]
      console.log(this.tipos_api);
      
      
    })
  }
}
