import { UrlService } from './../url.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WheelService } from './../wheel.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public wheelService: WheelService,
    private urlService: UrlService
  ) { }

  ngOnInit() {
  }

  // handleModalClose() {}

  handleModalClick() {
    this.urlService.relocate();
  }

}
