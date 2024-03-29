import { Component, ContentChild, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { PokemonClient } from 'pokenode-ts';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [FormsModule,FooterComponent, RouterLink],
  templateUrl: './principal.component.html'
})


export class PrincipalComponent implements OnInit {

clienterservice=inject(ClienteService)
api = new PokemonClient()
http=inject(HttpClient)


nombre:string="";
img_pokemon:string="";
pokemon_tipo:[]=[];
tipos_api:any;
contador=1;
pokemon_foto_data:any
array_pokemons:any;
res_pokemon:any;
pokemon_unico:any
pokemonData:any;
array_imagenes:any=[]
pokemon_json:any
id:number=0

array_todos_pokemon: {id:number; name: string; img: string; }[] = [];

ngOnInit(): void {

  let random = Math.floor(Math.random() * (1286 + 1));

   
  this.api.listPokemons(random,15).then((res)=>{
    this.array_pokemons = res.results

    res.results.map((response)=>{

      this.http.get(response.url).subscribe((res_peticion_interna)=>{
        
        
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
  })
}
}
