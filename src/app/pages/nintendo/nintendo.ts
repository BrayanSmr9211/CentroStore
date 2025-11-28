import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-nintendo',
  standalone: true,
  imports: [
    CommonModule,   // <-- Necesario para ngFor y ngIf
    DecimalPipe,
    RouterModule
  ],
  templateUrl: './nintendo.html',
  styleUrl: './nintendo.scss'
})
export class NintendoComponent {

products = [
  {
    image: 'assets/Image/controlnintendo.jpeg',
    title: 'Control Nintendo Switch',
    price: 1410000,
    brand: 'Nintendo Switch',
    badge: 'Black Friday'     // <-- agregado
  },


];

}
