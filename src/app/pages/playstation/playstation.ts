import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-playstation',
   imports: [
    CommonModule,   
    DecimalPipe,
    RouterModule
  ],
  templateUrl: './playstation.html',
  styleUrl: './playstation.scss',
})
export class Playstation {

  
products = [
  {
    image: 'assets/Image/play5.jpeg',
    title: 'PlayStation 5 Disco 1 TB con control ',
    price: 1410000,
    brand: 'accesorios',
    badge: 'Black Friday'     
  }, 

];


}
