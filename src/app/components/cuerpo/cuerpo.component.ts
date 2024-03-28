import { Component, inject } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { ModalService } from '../../services/modal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './cuerpo.component.html'
})
export class CuerpoComponent {
clienteservice = inject(ClienteService)
modalservice = inject(ModalService)

}
