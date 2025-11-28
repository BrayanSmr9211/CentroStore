import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './app/core/header/header';
import { FooterComponent } from './app/core/footer/footer';
import { SidebarComponent } from './shared/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  // Estado único que controla el sidebar
  sidebarOpen = false;

  // Maneja la selección de categoría desde el sidebar (opcional)
  onCategoryClick(category: string) {

  }
}
