import { Component } from '@angular/core';
import { HomeCarouselComponent } from '../../../pages/home-carousel/home-carousel';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [HomeCarouselComponent, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
