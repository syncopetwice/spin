import { LocaleService } from './../locale.service';
import { Component, OnInit } from '@angular/core';

import { TimeService } from './../time.service';
import { UrlService } from './../url.service';

import FlipDown from 'src/assets/libs/flipdown/flipdown';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(
    private timeService: TimeService,
    private urlService: UrlService,
    private localeService: LocaleService
  ) { }

  ngOnInit() {
    this.startCounter();
  }

  startCounter() {
    new FlipDown(this.timeService.getCounterTime()).start().ifEnded(() => this.handleCounterEnd());
  }

  handleCounterEnd() {
    this.urlService.relocate();
  }

}
