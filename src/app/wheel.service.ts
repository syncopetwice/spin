import { Injectable } from '@angular/core';

import _ from 'lodash';

import { Observable, Subject } from 'rxjs';

type ActionLabelType = 'Start'|'Rolling...'|'Try Again';
@Injectable({
  providedIn: 'root'
})
export class WheelService {

  constructor() { }

  private subject = new Subject<any>();



  public rotateState = 'start';
  public isImageLoading: boolean = true;

  public actionLabel: ActionLabelType = 'Start';

  public isAlreadyClicked = false;
  public isAnimationInProgress = false;
  public isWinModalActive = false;

  public clickCounter = 0;

  public deg = 0;

  highlight() {
    this.subject.next();
  }

  getHighlight(): Observable<any> {
    return this.subject.asObservable();
  }

  start() {

    console.log('Start');

    if (this.clickCounter === 0) {
      this.clickCounter++;
      this.rotateState = 'loose';
    } else {
      this.clickCounter = 0;
      this.rotateState = 'win';
    }

    // if (this.isWin(this.getAngle())) {
    //   this.isAlreadyClicked = false;
    //   this.isWinModalActive = true;
    //   this.clickCounter = 0;
    // } else {
    //   this.isAlreadyClicked = true;
    //   this.clickCounter++;
    // }
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

  handleAnimationStart() {
    this.isAnimationInProgress = true;
  }

  handleAnimationEnd() {
    this.isAnimationInProgress = false;
    this.actionLabel = 'Try Again';

    if (this.rotateState === 'win') {
      this.isWinModalActive = true;
    }

  }



}
