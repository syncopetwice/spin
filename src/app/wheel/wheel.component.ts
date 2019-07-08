import { WheelService } from './../wheel.service';
import { Component, OnInit } from '@angular/core';
import {
  trigger
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

  constructor(
    public wheelService: WheelService
  ) { }

  ngOnInit() {}

  handleStartAction() {
    this.wheelService.start();

  }
  handleModalClose() {
    this.wheelService.isWinModalActive = false;
  }

}
