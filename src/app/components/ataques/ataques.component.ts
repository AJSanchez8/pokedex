import { Component, inject, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { FooterComponent } from '../footer/footer.component';
import { ModalService } from '../../services/modal.service';
import { RouterLink } from '@angular/router';
import { AtaquesService } from '../../services/ataques.service';

@Component({
  selector: 'app-ataques',
  standalone: true,
  imports: [FooterComponent,RouterLink],
  templateUrl: './ataques.component.html'
})
export class AtaquesComponent implements OnInit {
clienteService = inject(ClienteService)
modalService = inject(ModalService)
ataquesService = inject(AtaquesService)

ngOnInit(): void {
  console.log(this.clienteService.ataques);
  
    this.clienteService.ataques;
}

}
