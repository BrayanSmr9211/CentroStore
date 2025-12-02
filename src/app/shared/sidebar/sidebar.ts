import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  @Input() open: boolean = false;

  @Output() toggle = new EventEmitter<void>();
  @Output() selectCategory = new EventEmitter<string>();

  constructor(private router: Router) {}

select(name: string) {
  // Si el sidebar está cerrado, solo lo abrimos
  if (!this.open) {
    this.toggle.emit();   // abre el sidebar
    return;               // detenemos aquí (no navegamos)
  }

  // Si YA está abierto → navega
  switch (name) {
    case 'Nintendo':
      this.router.navigate(['/nintendo']);
      break;

    case 'PlayStation':
      this.router.navigate(['/playstation']);
      break;

    case 'Xbox':
      this.router.navigate(['/xbox']);
      break;

    case 'Smartphone':
      this.router.navigate(['/Smartphone']);
      break;

      case 'Accesorios':
      this.router.navigate(['/Accesorios']);
      break;
  }

  // Después de navegar, cerramos el menú (opcional)
  this.toggle.emit();
}

  toggleSidebar() {
    this.toggle.emit();
  }
}
