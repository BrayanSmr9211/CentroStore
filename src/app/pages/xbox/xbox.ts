import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-xbox',
    imports: [
    CommonModule,   // <-- Necesario para ngFor y ngIf
    DecimalPipe,
    RouterModule
  ],
  templateUrl: './xbox.html',
  styleUrl: './xbox.scss',
})
export class Xbox {

  
products = [
  {
    image: 'assets/Image/xbox2.jpeg',
    title: 'Xbox series S',
    price: 1410000,
    brand: 'Xbox',
    badge: 'Black Friday'     // <-- agregado
  },
  {
    image: 'assets/Image/xbox1.jpeg',
    title: 'Xbox one fat',
    price: 1470000,
    brand: 'Xbox',
    badge: 'En oferta'        // <-- agregado
  },
  {
    image: 'assets/Image/xboxone2.jpeg',
    title: 'Xbox one S all digital',
    price: 1410000,
    brand: 'Xbox',
    badge: 'Black Friday'     // <-- agregado
  },
  {
    image: 'assets/Image/xboxone.jpeg',
    title: 'Xbox one fat',
    price: 1470000,
    brand: 'Xbox',
    badge: 'En oferta'        // <-- agregado
  },
  {
    image: 'assets/Image/controlxbox2.jpeg',
    title: 'Xbox one S de disco',
    price: 1410000,
    brand: 'Xbox',
    badge: 'Black Friday'     // <-- agregado
  },
  {
    image: 'assets/Image/controlxbox1.jpeg',
    title: 'Control gamesir G7 se nuevo en caja',
    price: 1470000,
    brand: 'Xbox',
    badge: 'En oferta'        // <-- agregado
  }]
}
