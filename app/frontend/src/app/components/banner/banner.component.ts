import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  slides = [
    {
      image: '../../../assets/banner.jpg',
      title: 'Cadastre seu curriculo',
    },
    {
      image: '../../../assets/banner2.jpg',
      title: 'Veja as vagas',
    },
    {
      image: '../../../assets/banner3.jpg',
      title: 'Alcance o sucesso',
    }
  ];
}
