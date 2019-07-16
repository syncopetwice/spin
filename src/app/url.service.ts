import { external } from './app.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  relocate() {
    window.location.href = external;
  }
}
