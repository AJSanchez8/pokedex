import { Component, inject, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {

pokeapiservice=inject(PokeapiService)
http=inject(HttpClient)

url:string="https://pokeapi.co/api/v2/"
nombre:string="";
pokemonData:any;
img_pokemon:string="";
pokemon_tipo:[]=[];
tipos_api:any;
contador=0;

ngOnInit(): void {
    this.http.get(this.url+"pokemon?limit=20&offset=20").subscribe((response)=>{

    this.pokemonData=response
    this.pokemonData=this.pokemonData["results"]

    console.log(this.pokemonData);
    
  })
}
}
