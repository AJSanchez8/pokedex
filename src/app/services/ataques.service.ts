import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtaquesService {

  
  nombre_version:string=""
  metodo_aprendizaje:string=""

  traducir_version(nombre:string){
    switch (nombre) {
      case "red-blue": {
        this.nombre_version="Pokemon rojo y Pokemon azul"
        break;
      }
      case "yellow": {
        this.nombre_version="Pokemon Amarillo"
        break;
      }
      case "gold-silver":{
        this.nombre_version="Pokemon oro y Pokemon plata"
        break;
      }
      case "crystal": {
        this.nombre_version="Pokemon cristal"
        break;
      }
      case "ruby-sapphire":{
        this.nombre_version="Pokemon rubý y Pokemon zafiro"
        break;
      }
      case "firered-leafgreen":{
        this.nombre_version="Pokemon rojo-fuego y Pokemon verde-hoja"
        break;
      }
      case "platinum":{
        this.nombre_version="Pokemon platino"
        break;
      }
      case "heartgold-soulsilver": {
        this.nombre_version="Pokemon oro-heartgold y Pokemon plata-soulsilver"
        break;
      }
      case "black-white": {
        this.nombre_version="Pokemon negro y Pokemon blanco"
        break;
       }
      case "colosseum": {
        this.nombre_version="Pokemon colosseum"
        break;
      }
      case "xd":{
        this.nombre_version="Pokemon xd"
        break;
      }
      case "black-2-white-2": {
        this.nombre_version="Pokemon negro 2 y Pokemon blanco 2"
        break;
      }
      case "x-y": {
        this.nombre_version="Pokemon X y Pokemon Y "
        break;
      }
      case "omega-ruby-alpha-sapphire": {
        this.nombre_version="Pokemon rubí-omega y Pokemon zafiro-alpha"
        break;
      }
      case "sun-moon": {
        this.nombre_version="Pokemon sol y Pokemon luna"
        break;
      }
      case "ultra-sun-ultra-moon": {
        this.nombre_version="Pokemon Ultrasol y Pokemon Ultraluna"
        break;
      }
      case "lets-go-pikachu-lets-go-eevee": {
        this.nombre_version="Pokémon Let's Go, Pikachu! y Let's Go, Eevee!"
        break
      }
      case "sword-shield": {
        this.nombre_version="Pokémon Espada y Pokémon Escudo"
        break
      } 
    }   
    return this.nombre_version
  }

  traducir_metodo(nombre:string){
    switch (nombre) {
      case "level-up": {
        this.metodo_aprendizaje="Nivel"
        break;
      }
      case "egg": {
        this.metodo_aprendizaje="Huevo"
        break;
      }
      case "tutor":{
        this.metodo_aprendizaje="Enseñado por NPC"
        break;
      }
      case "machine": {
        this.metodo_aprendizaje="MT/MO"
        break;
      }
      case "stadium-surfing-pikachu":{
        this.metodo_aprendizaje="Stadium: Surfendes Pikachu"
        break;
      }
      case "light-ball-egg":{
        this.metodo_aprendizaje="Pikachu cuya madre tenía Bola de Luz y no era Ditto"
        break;
      }
      case "colosseum-purification":{
        this.metodo_aprendizaje="Purificación de un pokemon"
        break;
      }
      case "xd-shadow": {
        this.metodo_aprendizaje="Pokemon sombra robado"
        break;
      }
      case "xd-purification": {
        this.metodo_aprendizaje="Purificación de un pokemon"
        break;
       }
      case "form-change": {
        this.metodo_aprendizaje="Rotom o Cosplay Pikachu"
        break;
      }
      case "zygarde-cube":{
        this.metodo_aprendizaje="Cubo de Zygarde."
        break;
      }
    }   
    return this.metodo_aprendizaje


  }

  constructor() { }
}
