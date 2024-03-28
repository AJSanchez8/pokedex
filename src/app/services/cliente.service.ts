import { Injectable, inject } from '@angular/core';
import { PokemonClient, PokemonType } from 'pokenode-ts';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  nombre_pokemon_cli:string="";
  nombre_cli:any="";
  tipo_cli:PokemonType[]=[];
  img_cli:any
  img_cli_mostrar:string="";
  id_cli_pokemons:Number=0;
  have_pokemon:boolean=false
  fondo_pokemon:string="";
  array_pokemons:any

  api = new PokemonClient()


  

  info_nombre_api(){
    this.api.getPokemonByName(this.nombre_pokemon_cli).then(
    (res) =>{
      this.nombre_cli=res.name
      this.tipo_cli=res.types
      this.fondo_pokemon=res.types[0].toString()
      this.img_cli=res.sprites
      this.id_cli_pokemons=res.id
      this.img_cli_mostrar = this.img_cli["other"]["official-artwork"]["front_default"]

      this.nombre_pokemon_cli=""
      this.have_pokemon=true
    }).catch(()=>{
      alert("POKEMON NO ENCONTRADO")
      this.nombre_pokemon_cli=""
    })

  }
  info_nombre_api_con_id(id:number){
    this.api.getPokemonByName(String(id)).then(
    (res) =>{
      this.nombre_cli=res.name
      this.tipo_cli=res.types
      this.fondo_pokemon=res.types[0].toString()
      this.img_cli=res.sprites
      this.id_cli_pokemons=res.id
      this.img_cli_mostrar = this.img_cli["other"]["official-artwork"]["front_default"]

      this.nombre_pokemon_cli=""
      this.have_pokemon=true
    }).catch(()=>{
      alert("POKEMON NO ENCONTRADO")
      this.nombre_pokemon_cli=""
    })

  }
  info_tipo(){}

  constructor() {
 }
}


