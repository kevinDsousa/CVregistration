import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  slides = [
    {
      image: '../../../assets/icon1.png',
    },
    {
      image: '../../../assets/icon2.png',
    },
    {
      image: '../../../assets/icon3.png',
    }
  ];
}
