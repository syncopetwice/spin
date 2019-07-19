import { LocaleService } from './../locale.service';
import { TimeService } from './../time.service';
import { WheelService } from './../wheel.service';
import { WindowRef } from '../window.service';

import get from 'lodash/get';

import {
  Component,
  OnInit
} from '@angular/core';
@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {

  public data;

  constructor(
    public wheelService: WheelService,
    public timeService: TimeService,
    private $window: WindowRef,
    public localeService: LocaleService
  ) {}

  public description;

  public currentDay: string = '';

  ngOnInit() {
    this.currentDay = this.timeService.getTodayDayName(this.localeService.locale);
    console.log(this.currentDay);
    this.data = get(this.$window, 'nativeWindow.__data.headline');

    if (get(this, 'data.description')[this.localeService.locale].includes('{{currentDay}}')) {
      this.description = get(this, 'data.description')[this.localeService.locale].replace('{{currentDay}}', this.currentDay);
    } else {
      this.description = get(this, 'data.description')[this.localeService.locale];
    }
  }

}
