import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

import Rotation from './rotate';

import { Subscription } from 'rxjs';

import { WheelService } from './../wheel.service';
@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: Rotation,
  styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements OnInit {

  subscription: Subscription;

  constructor(
    public wheelService: WheelService
  ) {
    this.subscription = this.wheelService.getHighlight().subscribe(() => {

    });
  }

  public animationCounter: number = 0;

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

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

}
