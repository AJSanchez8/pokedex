import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  http = inject(HttpClient)
  url:string="https://pokeapi.co/api/v2/"
  nombre:string="";
  pokemonData:any;
  img_pokemon:string="";
  pokemon_tipo:[]=[];
  tipos_api:any;
  contador=0;



  info_nombre(){
    this.http.get(this.url+"pokemon/"+this.nombre.toLowerCase()).subscribe((response)=>{
      this.pokemonData=response
      this.img_pokemon=this.pokemonData["sprites"]["other"]["official-artwork"]["front_default"]
      this.pokemon_tipo=this.pokemonData["types"]
      console.log(this.pokemon_tipo);
      
    })
    this.nombre="";
  }
  info_tipo(){

  }  

  constructor() {}
}
