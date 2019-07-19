import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  public locale = 'en';

  constructor() {}

  change(locale) {
    this.locale = locale;
  }

}
