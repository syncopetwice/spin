import { Component, OnInit } from '@angular/core';

import { TimeService } from './../time.service';

import FlipDown from 'src/assets/libs/flipdown/flipdown';

import { external } from '../app.constants';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(
    private timeService: TimeService
  ) { }

  ngOnInit() {
    this.startCounter();
  }

  startCounter() {
    new FlipDown(this.timeService.getCounterTime()).start().ifEnded(() => this.handleCounterEnd());
  }

  handleCounterEnd() {
    // window.location.href = external;
  }

}
