import { Component, inject } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-tipos',
  standalone: true,
  imports: [],
  templateUrl: './tipos.component.html',
})
export class TiposComponent {
  clienteservice = inject(ClienteService)
}
