import { Component, OnInit } from '@angular/core';

import { Image } from '../image';
import { IMAGES } from '../demo-images'; // demo-questions-2 for Starting screen.


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {


  selectedImage: Image;
  onSelect(image: Image): void {
    this.selectedImage = image;
  }

  images = IMAGES;

  constructor() { }

  ngOnInit() {
  }

}
