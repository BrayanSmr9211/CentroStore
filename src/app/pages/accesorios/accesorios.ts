import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-accesorios',
 imports: [
    CommonModule,       // <--- habilita ngFor, ngIf
    DecimalPipe         // <--- habilita pipe number
  ],
  templateUrl: './accesorios.html',
  styleUrl: './accesorios.scss',
})
export class Accesorios {
   products = [
    {
    image: 'assets/Image/moto2.jpeg',
    title: 'BMW Wall - E bloques de construcción',
    price: 1410000,
    brand: 'Accesorios',
    badge: 'Black Friday'     
  }, 
  {
    image: 'assets/Image/controlxbox2.jpeg',
    title: 'Control Xbox Gamesir kaleid nuevo en caja',
    price: 1410000,
    brand: 'Xbox',
    badge: 'Black Friday'    
  },
  {
    image: 'assets/Image/controlxbox1.jpeg',
    title: 'Control gamesir G7 se nuevo en caja',
    price: 1470000,
    brand: 'Xbox',
    badge: 'En oferta'        
  },
  {
    image: 'assets/Image/controlnintendo.jpeg',
    title: 'Control Nintendo Switch',
    price: 1410000,
    brand: 'Nintendo Switch',
    badge: 'Black Friday'
  },
  ];

}
