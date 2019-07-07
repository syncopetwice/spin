import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { Comment } from './../comment.model';

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
    autoHeight: true,
    lazyLoad: true,
    navText: [
      '<div class="owl-carousel-arrow owl-carousel-arrow--left"></div>',
      '<div class="owl-carousel-arrow owl-carousel-arrow--right"></div>'
    ],
    nav: true
  };

  comments: Comment[] = [
    {
      name: `Paul Davis`,
      message: `I just unpacked the my new Samsung Galaxy S10! This is the best prize of all!!`
    },
    {
      name: `Lillian Pagan`,
      message: `I won the ipad, but I already have it, can I change the prize to the Macbook?`,
    },
    {
      name: `Joseph Payne`,
      message: `Got samsung s10 - really disappointed, wanted iphone... Guess I'll have to sell it`
    },
    {
      name: `Shanay Shah`,
      message: `Never believed in any kind of "GET IPHONE ABSOLUTELY FREE" giveaway ads but this one worked for me. I definetely will participate in the next giveaways too!`
    }
  ];

  constructor() { }

  ngOnInit() {}

}
