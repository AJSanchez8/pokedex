import { Component, inject, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { FooterComponent } from '../footer/footer.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-ataques',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './ataques.component.html'
})
export class AtaquesComponent implements OnInit {
clienteService = inject(ClienteService)
modalService = inject(ModalService)

ngOnInit(): void {
  console.log(this.clienteService.ataques);
  
    this.clienteService.ataques;
}

}
