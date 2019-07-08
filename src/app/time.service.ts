import { Injectable } from '@angular/core';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  getTodayDayName() {
    return moment().format('dddd') || 'Day';
  }

  getCounterTime() {
    return moment().add({
      minutes: 10,
      seconds: 1
    }).unix();
  }


}
