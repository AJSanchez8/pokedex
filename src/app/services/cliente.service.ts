import { Injectable, inject } from '@angular/core';
import { PokemonClient, PokemonType,NamedAPIResource } from 'pokenode-ts';
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

  // Tipos pokemon
  tipo:string=""
  array_tipos:[]=[];
  /** A list of types this type has no effect on */
  no_damage_to: NamedAPIResource[]=[];
  /** A list of types this type is not very effect against */
  half_damage_to: NamedAPIResource[]=[];
  /** A list of types this type is very effect against */
  double_damage_to: NamedAPIResource[]=[];
  /** A list of types that have no effect on this type */
  no_damage_from: NamedAPIResource[]=[];
  /** A list of types that are not very effective against this type */
  half_damage_from: NamedAPIResource[]=[];
  /** A list of types that are very effective against this type */
  double_damage_from: NamedAPIResource[]=[];
  

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
  info_tipo(){
    this.api.getTypeByName(this.tipo).then((response)=>{
      this.no_damage_from = response["damage_relations"]["no_damage_from"]
      this.no_damage_to = response["damage_relations"]["double_damage_to"]

      this.half_damage_from = response["damage_relations"]["half_damage_from"]
      this.half_damage_to= response["damage_relations"]["half_damage_to"]



      this.double_damage_from=response["damage_relations"]["double_damage_from"]
      this.double_damage_to=response["damage_relations"]["double_damage_to"]
      console.log(this.no_damage_to);
      
    })

    
  }

  constructor() {
 }
}


