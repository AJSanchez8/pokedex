import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ModalComponent } from './components/modal/modal.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CuerpoComponent, BusquedaComponent, RouterModule, ModalComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'PokeRoke';
}
