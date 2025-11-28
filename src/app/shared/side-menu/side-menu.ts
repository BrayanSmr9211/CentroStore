import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-menu.html',
  styleUrls: ['./side-menu.scss']
})
export class SideMenuComponent {
  @Input() open = false;

  close() {
    this.open = false;
  }
}
