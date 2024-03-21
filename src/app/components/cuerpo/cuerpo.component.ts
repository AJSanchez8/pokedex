import { Component, inject } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [],
  templateUrl: './cuerpo.component.html'
})
export class CuerpoComponent {
pokeapiservice = inject(PokeapiService)

}
