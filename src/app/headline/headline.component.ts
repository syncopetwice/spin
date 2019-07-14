import { TimeService } from './../time.service';
import { WheelService } from './../wheel.service';

import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {

  constructor(
    private wheelService: WheelService,
    private timeService: TimeService
  ) {}

  public currentDay: string = '';

  ngOnInit() {
    this.currentDay = this.timeService.getTodayDayName();
  }

  handleSpinItUpAction() {
    this.wheelService.highlight();
  }

}
