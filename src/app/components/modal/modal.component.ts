import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ClienteService } from '../../services/cliente.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './modal.component.html'
})
export class ModalComponent {
modalService= inject(ModalService)
clienteService=inject(ClienteService)
}
