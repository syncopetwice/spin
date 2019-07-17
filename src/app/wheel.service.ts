import { Injectable } from '@angular/core';

type ActionLabelType = 'Start'|'Rolling...'|'Try Again';
@Injectable({
  providedIn: 'root'
})
export class WheelService {

  constructor() { }

  public rotateState = 'start';

  public isImageLoading: boolean = true;

  public actionLabel: ActionLabelType = 'Start';

  public isAlreadyClicked = false;
  public isAnimationInProgress = false;
  public isWinModalActive = false;

  public clickCounter = 0;

  public deg = 0;

  start() {
    if (this.clickCounter === 0) {
      this.clickCounter++;
      this.rotateState = 'loose';
    } else {
      this.clickCounter = 0;
      this.rotateState = 'win';
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
