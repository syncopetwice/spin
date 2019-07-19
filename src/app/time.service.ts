import { Injectable } from '@angular/core';

import format from 'date-fns/format';
import addMinutes from 'date-fns/add_minutes';
import getTime from 'date-fns/get_time';

import es from 'date-fns/locale/es';
import fr from 'date-fns/locale/fr';
import de from 'date-fns/locale/de';
import { WindowRef } from './window.service';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(
    public $window: WindowRef
  ) { }

  getTodayDayName(locale) {
    return format(new Date(), 'dddd', {
      locale: this.getLocaleName(locale)
    }) || 'Day';
  }

  getLocaleName(locale) {
    if (locale === 'de') return de;
    if (locale === 'fr') return fr;
    if (locale === 'es') return es;
    if (locale === 'en') return;
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
