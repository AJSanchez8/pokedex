import { Component, inject, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-ataques',
  standalone: true,
  imports: [],
  templateUrl: './ataques.component.html'
})
export class AtaquesComponent implements OnInit {
clienteService = inject(ClienteService)

ngOnInit(): void {
    this.clienteService.ataques;
}

}
