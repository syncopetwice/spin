import get from 'lodash/get';
import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../window.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  customOptions = {
    loop: true,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoHeight: true,
    slideBy: 1,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      1000: {
        margin: 55,
        items: 2,
        nav: true
      }
    },
    lazyLoad: true,
    navText: [
      '<div class="owl-carousel-arrow owl-carousel-arrow--left"></div>',
      '<div class="owl-carousel-arrow owl-carousel-arrow--right"></div>'
    ]
  };

  comments = [];

  constructor(
    private $window: WindowRef
  ) { }

  ngOnInit() {
    this.comments = get(this.$window, 'nativeWindow.__data.comments', []);
  }



}
