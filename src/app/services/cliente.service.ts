import { Injectable, inject } from '@angular/core';
import { PokemonClient, PokemonType,NamedAPIResource, TypePokemon, PokemonMove } from 'pokenode-ts';
import { HttpClient } from '@angular/common/http';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() {
  }

  http=inject(HttpClient)
  modalService = inject(ModalService)

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

  peso:number=0;
  altura:number=0;

  ataques: PokemonMove[]=[]
  ataques_mostrar:any

  
  info_nombre_api(){
    this.api.getPokemonByName(this.nombre_pokemon_cli.toLowerCase()).then(
    (res) =>{

      this.nombre_cli=res.name
      this.tipo_cli=res.types
      this.fondo_pokemon=res.types[0].toString()
      this.img_cli=res.sprites
      this.id_cli_pokemons=res.id
      this.img_cli_mostrar = this.img_cli["other"]["official-artwork"]["front_default"]
      this.peso = res.weight
      this.altura= res.height
      this.ataques=res.moves

      console.log(this.ataques);
      

      this.nombre_pokemon_cli=""
      this.have_pokemon=true
    }).catch(()=>{
      alert("POKEMON NO ENCONTRADO")
      this.nombre_pokemon_cli=""
    })
    this.modalService.modal=false
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

  carga_tipo:boolean=false;
  pokemos_por_tipo:TypePokemon[]=[]
  nombre:string="";
img_pokemon:string="";
pokemon_tipo:[]=[];
tipos_api:any;
contador=1;
pokemon_foto_data:any
res_pokemon:any;
pokemon_unico:any
pokemonData:any;
array_imagenes:any=[]
pokemon_json:any
id:number=0
array_todos_pokemon: {id:number; name: string; img: string; }[] = [];

  info_tipo(){
    this.api.getTypeByName(this.tipo).then((response)=>{
      response.pokemon.map((response)=>{

        this.http.get(response.pokemon.url).subscribe((res_peticion_interna)=>{
          
          
          this.pokemonData=res_peticion_interna
          this.id=this.pokemonData["id"]
          this.nombre=this.pokemonData["name"]
          this.img_pokemon=this.pokemonData["sprites"]["other"]["official-artwork"]["front_default"]
          this.pokemon_tipo=this.pokemonData["types"]
          
          let poke_info={
            id: this.id,
            name: this.nombre,
            img: this.img_pokemon,
          }
          this.array_todos_pokemon.push(poke_info)
          
        })
      })
      
      this.no_damage_from = response["damage_relations"]["no_damage_from"]
      this.no_damage_to = response["damage_relations"]["no_damage_to"]

      this.half_damage_from = response["damage_relations"]["half_damage_from"]
      this.half_damage_to= response["damage_relations"]["half_damage_to"]



      this.double_damage_from=response["damage_relations"]["double_damage_from"]
      this.double_damage_to=response["damage_relations"]["double_damage_to"]
      this.carga_tipo=true;
    })
    this.array_todos_pokemon = [];
  }


  path_logo:string=""
  elegir_imagen_tipo(tipo:string){
    switch (tipo) {
      case "fire": {
        this.path_logo="./assets/img/tipos/fire.svg"
        break;
      }
      case "bug": {
        this.path_logo="./assets/img/tipos/bug.svg"
        break;
      }
      case "dark":{
        this.path_logo="./assets/img/tipos/dark.svg"
        break;
      }
      case "dragon": {
        this.path_logo="./assets/img/tipos/dragon.svg"
        break;
      }
      case "electric":{
        this.path_logo="./assets/img/tipos/electric.svg"
        break;
      }
      case "fairy":{
        this.path_logo="./assets/img/tipos/fairy.svg"
        break;
      }
      case "fighting":{
        this.path_logo="./assets/img/tipos/fighting.svg"
        break;
      }
      case "ghost": {
        this.path_logo="./assets/img/tipos/ghost.svg"
        break;
      }
      case "grass": {
        this.path_logo="./assets/img/tipos/grass.svg"
        break;
       }
      case "ground": {
        this.path_logo="./assets/img/tipos/ground.svg"
        break;
      }
      case "ice":{
        this.path_logo="./assets/img/tipos/ice.svg"
        break;
      }
      case "normal": {
        this.path_logo="./assets/img/tipos/normal.svg"
        break;
      }
      case "poison": {
        this.path_logo="./assets/img/tipos/poison.svg"
        break;
      }
      case "psychic": {
        this.path_logo="./assets/img/tipos/psychic.svg"
        break;
      }
      case "rock": {
        this.path_logo="./assets/img/tipos/rock.svg"
        break;
      }
      case "steel": {
        this.path_logo="./assets/img/tipos/steel.svg"
        break;
      }
      case "water": {
        this.path_logo="./assets/img/tipos/water.svg"
        break
      }
      case "flying": {
        this.path_logo="./assets/img/tipos/flying.svg"
        break
      } 
    }   
    return this.path_logo
  }

  bg_color:string=""
  estilos_logo:string="w-8 z-50 cursor-help rounded-full m-1 p-2 "
  add_bg_color(tipo:string){
    switch (tipo) {
      case "fire": {
        this.bg_color=this.estilos_logo+"bg-red-500"
        break;
      }
      case "bug": {
        this.bg_color=this.estilos_logo+"bg-green-700"
        break;
      }
      case "dark":{
        this.bg_color=this.estilos_logo+"bg-violet-950"
        break;
      }
      case "dragon": {
        this.bg_color=this.estilos_logo+"bg-cyan-600"
        break;
      }
      case "electric":{
        this.bg_color=this.estilos_logo+"bg-yellow-500"
        break;
      }
      case "fairy":{
        this.bg_color=this.estilos_logo+"bg-pink-300"
        break;
      }
      case "fighting":{
        this.bg_color=this.estilos_logo+"bg-orange-500"
        break;
      }
      case "ghost": {
        this.bg_color=this.estilos_logo+"bg-purple-600"
        break;
      }
      case "grass": {
        this.bg_color=this.estilos_logo+"bg-green-500"
        break;
       }
      case "ground": {
        this.bg_color=this.estilos_logo+"bg-orange-700"
        break;
      }
      case "ice":{
        this.bg_color=this.estilos_logo+"bg-cyan-400"
        break;
      }
      case "normal": {
        this.bg_color=this.estilos_logo+"bg-red-300"
        break;
      }
      case "poison": {
        this.bg_color=this.estilos_logo+"bg-purple-500"
        break;
      }
      case "psychic": {
        this.bg_color=this.estilos_logo+"bg-pink-500"
        break;
      }
      case "rock": {
        this.bg_color=this.estilos_logo+"bg-orange-950"
        break;
      }
      case "steel": {
        this.path_logo=this.estilos_logo+"bg-slate-500"
        break;
      }
      case "water": {
        this.path_logo=this.estilos_logo+"bg-blue-500"
        break
        
      }
      case "flying": {
        this.path_logo=this.estilos_logo+"bg-blue-200"
        break
        
      }
    }  
    return this.bg_color 
  }



}
