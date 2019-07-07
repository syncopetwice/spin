import _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  animations: [
    trigger('rotate',
      []
    )
  ],
  styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements OnInit {

  constructor() { }

  public isAlreadyClicked = false;
  public isAnimationInProgress = false;
  public isWinModalActive = false;

  public deg = 0;

  ngOnInit() {}

  handleStartAction() {

    if (this.isWin(this.getAngle())) {
      this.isWinModalActive = true;
    } else {
      this.isWinModalActive = false;
    }
    // this.isAnimationInProgress = true;
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getAngle() {
    const output = this.randomIntFromInterval(0, 360);
    console.log("Get Angle", output);
    return output;
  }

  isWin(angle) {
    if (
      _.inRange(angle, 0, 45) ||
      _.inRange(angle, 90, 135) ||
      _.inRange(angle, 180, 225) ||
      _.inRange(angle, 270, 315)
    ) {
      return true;
    } else {
      return false;
    }
  }

  handleAnimationStart() {}

  handleAnimationEnd() {

    this.isAlreadyClicked = true;
    // this.isAnimationInProgress = false;

  }

}
