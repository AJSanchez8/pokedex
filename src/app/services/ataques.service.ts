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
        this.nombre_version="Rojo\nAzul"
        break;
      }
      case "yellow": {
        this.nombre_version="Amarillo"
        break;
      }
      case "gold-silver":{
        this.nombre_version="Oro\nPlata"
        break;
      }
      case "crystal": {
        this.nombre_version="Cristal"
        break;
      }
      case "ruby-sapphire":{
        this.nombre_version="Rubí\nZafiro"
        break;
      }
      case "firered-leafgreen":{
        this.nombre_version="Rojo-fuego\nVerde-hoja"
        break;
      }
      case "platinum":{
        this.nombre_version="Platino"
        break;
      }
      case "heartgold-soulsilver": {
        this.nombre_version="Oro-heartgold\nPlata-soulsilver"
        break;
      }
      case "black-white": {
        this.nombre_version="Negro\nBlanco"
        break;
       }
      case "colosseum": {
        this.nombre_version="Colosseum"
        break;
      }
      case "xd":{
        this.nombre_version="XD"
        break;
      }
      case "black-2-white-2": {
        this.nombre_version="Negro-2\nBlanco-2"
        break;
      }
      case "x-y": {
        this.nombre_version="X - Y "
        break;
      }
      case "omega-ruby-alpha-sapphire": {
        this.nombre_version="Rubí-omega\nZafiro-alpha"
        break;
      }
      case "sun-moon": {
        this.nombre_version="Sol\nLuna"
        break;
      }
      case "ultra-sun-ultra-moon": {
        this.nombre_version="Ultrasol\nUltraluna"
        break;
      }
      case "lets-go-pikachu-lets-go-eevee": {
        this.nombre_version="Let's Go"
        break
      }
      case "sword-shield": {
        this.nombre_version="Espada\nEscudo"
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
