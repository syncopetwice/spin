import { Injectable } from '@angular/core';
import { WindowRef } from './window.service';
import get from 'lodash/get';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(
    private $window: WindowRef
  ) {}

  relocate() {
    if (get(this.$window, 'nativeWindow.__data.relocateLink')) {
      window.location.href = this.$window.nativeWindow.__data.relocateLink;
    }
  }
}
