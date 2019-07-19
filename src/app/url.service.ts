import { Injectable } from '@angular/core';
import { WindowRef } from './window.service';
import get from 'lodash/get';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(
    public windowRef: WindowRef
  ) {}

  relocate() {
    if (get(this, 'windowRef.nativeWindow.relocateLink')) {
      window.location.href = this.windowRef.nativeWindow.relocateLink;
    }
  }
}
