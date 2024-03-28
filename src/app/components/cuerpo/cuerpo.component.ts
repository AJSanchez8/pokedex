import { Component, inject } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [],
  templateUrl: './cuerpo.component.html'
})
export class CuerpoComponent {
clienteservice = inject(ClienteService)

}
