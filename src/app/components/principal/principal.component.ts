import { Component, inject } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
pokeapiService=inject(PokeapiService)
}
