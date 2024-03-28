import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {


  modal:boolean=false

  open_modal(){
    this.modal=true
    console.log(this.modal);
    return this.modal=true
  }
  close_modal(){
    this.modal=false
    console.log(this.modal);
    return this.modal=false
  }

  constructor() { }
}
