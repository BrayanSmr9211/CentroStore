import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],  // <-- IMPORTANTE
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
constructor(private router: Router) {}
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  navigate(route: string) {
  this.router.navigate([route]);
}

}
