import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  templateUrl: './home-carousel.html',
  styleUrls: ['./home-carousel.scss'],
  imports: [CommonModule]
})
export class HomeCarouselComponent {

  constructor(private router: Router) {}

  images = [
    { src: 'assets/banner/nintendo.png', route: '/nintendo' },
    { src: 'assets/Image/motopromo.png', route: '/playstation' },
    { src: 'assets/banner/xboxpromo.png', route: '/xbox' }
  ];

  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 4000); // cada 4 segundos
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  navigateTo(index: number) {
    const route = this.images[index].route;
    this.router.navigate([route]);
  }
}
