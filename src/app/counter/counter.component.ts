import { Component, OnInit } from '@angular/core';

import FlipDown from 'src/assets/libs/flipdown/flipdown';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {
    const date = new Date().setDate(new Date().getDate() + 1) / 1000;
    new FlipDown(date).start();
  }

}
