import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class WheelService {

  constructor() { }

  public isAlreadyClicked = false;
  public isAnimationInProgress = false;
  public isWinModalActive = false;

  public clickCounter = 0;

  public deg = 0;

  start() {
    if (this.isWin(this.getAngle())) {
      this.isAlreadyClicked = false;
      this.isWinModalActive = true;
      this.clickCounter = 0;
    } else {
      this.isAlreadyClicked = true;
      this.clickCounter++;
    }
  }

  randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  getAngle = () => this.randomIntFromInterval(0, 360);

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

  handleAnimationEnd() {}



}
