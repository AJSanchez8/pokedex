import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CuerpoComponent, BusquedaComponent, RouterModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'PokeRoke';
}
