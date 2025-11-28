import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-smartphone',
  standalone: true,     // <--- 🔥 IMPORTANTE
  imports: [
    CommonModule,       // <--- habilita ngFor, ngIf
    DecimalPipe         // <--- habilita pipe number
  ],
  templateUrl: './smartphone.html',
  styleUrl: './smartphone.scss',
})
export class Smartphone {

  products = [
    {
      image: 'assets/banner/smartphone.png',
      title: 'Nintendo Switch OLED 64GB Standard Blanco',
      price: 1410000,
      brand: 'Nintendo Switch',
      badge: 'Black Friday'
    },
    {
      image: 'assets/banner/smartphone.png',
      title: 'Nintendo Switch OLED 64GB Standard Neón',
      price: 1470000,
      brand: 'Nintendo Switch',
      badge: 'En oferta'
    }
  ];
}
