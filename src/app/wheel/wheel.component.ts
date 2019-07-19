import {
  Component,
  OnInit
} from '@angular/core';

import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

const animation = '5s cubic-bezier(0.075, 0.82, 0.165, 1)';

import { WheelService } from './../wheel.service';
@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  animations: [
    trigger('rotate',
      [
        state('start', style({
          transform: 'rotate(0deg)'
        })),
        state('loose', style({
          transform: 'rotate(510deg)'
        })),
        state('win', style({
          transform: 'rotate(1100deg)'
        })),
        transition('start => loose', [
          animate(animation)
        ]),
        transition('loose => win', [
          animate(animation)
        ])
      ]
    ),
    trigger('highlight', [
      state('init', style({
        transform: 'translate(-50%, -50%) scale(1.1)'
      })),
      state('done', style({
        transform: 'translate(-50%, -50%) scale(1)'
      })),
      transition('init <=> done', [
        animate('5s cubic-bezier(0.075, 0.82, 0.165, 1)')
      ])
    ])
  ],
  styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements OnInit {

  constructor(
    public wheelService: WheelService
  ) {}

  public animationCounter: number = 0;

  ngOnInit() {}

  handleImageLoad() {
    this.wheelService.isImageLoading = false;
  }

  handleStartAction() {
    this.wheelService.start();
  }

  handleModalClose() {
    this.wheelService.isWinModalActive = false;
  }

  handleAnimationStart() {
    if (this.animationCounter > 1) {
      this.wheelService.handleAnimationStart();
    } else {
      this.animationCounter++;
    }
  }

  handleAnimationEnd() {
    if (this.animationCounter > 1) {
      this.wheelService.handleAnimationEnd();
    } else {
      this.animationCounter++;
    }
  }

  handleActionAnimationStart() {}

  handleActionAnimationEnd() {}

}
