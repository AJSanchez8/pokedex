import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModalService {


  modal:boolean=false
  ver_ataques:boolean=false

  open_modal(){
    return this.modal=true
  }
  close_modal(){
    this.ver_ataques=true
    this.modal=false
    return this.modal,this.ver_ataques
  } 

  abrir_ataques(){
    return this.ver_ataques=true
  }
  cerrar_ataques(){
    return this.ver_ataques=false
  }


  constructor() { }
}
