import { Component, inject } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
pokeapiService = inject(PokeapiService)
}
