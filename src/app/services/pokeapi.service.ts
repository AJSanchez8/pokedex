import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  http = inject(HttpClient)
  url:string="https://pokeapi.co/api/v2/"
  nombre:string="";
  tipos:string="";
  pokemonData:any;
  img_pokemon:string="";
  pokemon_tipo:string="";

  info_nombre(){
    this.http.get(this.url+"pokemon/"+this.nombre.toLowerCase()).subscribe((response)=>{
      this.pokemonData=response
      this.img_pokemon=this.pokemonData["sprites"]["other"]["official-artwork"]["front_default"]
      this.pokemon_tipo=this.pokemonData["types"]
      console.log(this.pokemon_tipo);
      

      console.log(this.pokemonData)
    })
    this.nombre="";
  }
  info_tipo(){
    this.http.get(this.url+"/"+this.tipos)
  }

  constructor() { }
}
