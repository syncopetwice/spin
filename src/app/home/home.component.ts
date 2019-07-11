import { Component, OnInit } from '@angular/core';
import { WheelService } from './../wheel.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public wheelService: WheelService
  ) { }

  ngOnInit() {
  }

}
