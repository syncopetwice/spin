import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 500,
    items: 2,
    margin: 55,
    navText: [
      '<div class="owl-carousel-arrow owl-carousel-arrow--left"></div>',
      '<div class="owl-carousel-arrow owl-carousel-arrow--right"></div>'
    ],
    nav: true
  };

  collection = [1,2,3,4,5,6,7];

  constructor() { }

  ngOnInit() {



  }

}
