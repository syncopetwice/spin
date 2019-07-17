import { Injectable } from '@angular/core';

import format from 'date-fns/format';
import addMinutes from 'date-fns/add_minutes';
import getTime from 'date-fns/get_time';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  getTodayDayName() {
    return format(new Date(), 'dddd') || 'Day';
  }

  getCounterTime() {
    return Number(
      format(
        getTime(
          addMinutes(format(new Date().getTime()), 10)
        ),
        'X'
      )
    );
  }


}
