import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-tipos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tipos.component.html',
})
export class TiposComponent {
  clienteservice = inject(ClienteService)
}
