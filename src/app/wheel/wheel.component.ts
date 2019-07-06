import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements OnInit {

  constructor() { }

  public deg = 0;

  public wheelStyles = {};

  ngOnInit() {
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1 ) + min);
  }

  rotate() {
    const deg = this.randomIntFromInterval(1, 360);

    this.wheelStyles = {
      transform: `rotate(${deg + 360}deg)`
    };

    console.log(this.wheelStyles)

  }

}
