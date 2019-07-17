import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Comment } from './../comment.model';
@Component({
  selector: 'app-comments',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  comments: Comment[] = [
    {
      name: `Gregory Yang`,
      message: `I just unpacked the my new Samsung Galaxy S10! This is the best prize of all!!`,
      state: `IN`,
      avatar: './assets/comments/8vu802u5812vu5.png'
    },
    {
      name: `Lillian Pagan`,
      message: `I won the ipad, but I already have it, can I change the prize to the Macbook?`,
      state: `UT`,
      avatar: './assets/comments/v12uv4120941v24.png'
    },
    {
      name: `Joseph Payne`,
      message: `Got samsung s10 - really disappointed, wanted iphone... Guess I'll have to sell it`,
      state: `NV`,
      avatar: './assets/comments/uhvru12h1yv2590712ym.png'
    },
    {
      name: `Shanay Shah`,
      message: `Never believed in any kind of "GET IPHONE ABSOLUTELY FREE" giveaway ads but this one worked for me. I definetely will participate in the next giveaways too!`,
      state: `NY`,
      avatar: './assets/comments/192vu021vu4v124.png'
    }
  ];

  constructor() { }

  ngOnInit() {

  }

}
