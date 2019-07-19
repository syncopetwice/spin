import { WindowRef } from './../window.service';
import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../locale.service';
import get from 'lodash/get';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public data;

  constructor(
    public localeService: LocaleService,
    private $window: WindowRef
  ) { }

  ngOnInit() {
    this.data = get(this.$window, 'nativeWindow.__data.footer', {});

  }

}
