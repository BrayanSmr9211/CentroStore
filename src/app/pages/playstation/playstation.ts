import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-playstation',
   imports: [
    CommonModule,   // <-- Necesario para ngFor y ngIf
    DecimalPipe,
    RouterModule
  ],
  templateUrl: './playstation.html',
  styleUrl: './playstation.scss',
})
export class Playstation {

  
products = [
  {
    image: 'assets/Image/moto2.jpeg',
    title: 'BMW Wall - E bloques de construcción',
    price: 1410000,
    brand: 'accesorios',
    badge: 'Black Friday'     // <-- agregado
  }, 
  {
    image: 'assets/Image/controlxbox2.jpeg',
    title: 'Control Xbox Gamesir kaleid nuevo en caja',
    price: 1410000,
    brand: 'Nintendo Switch',
    badge: 'Black Friday'     // <-- agregado
  },
  {
    image: 'assets/Image/controlxbox1.jpeg',
    title: 'Control gamesir G7 se nuevo en caja',
    price: 1470000,
    brand: 'Nintendo Switch',
    badge: 'En oferta'        // <-- agregado
  }
];


}
