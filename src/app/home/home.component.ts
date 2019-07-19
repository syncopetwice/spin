import { LocaleService } from './../locale.service';
import { UrlService } from './../url.service';
import { Component, OnInit } from '@angular/core';
import { WheelService } from './../wheel.service';
import { WindowRef } from '../window.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public wheelService: WheelService,
    private urlService: UrlService,
    public localeService: LocaleService,
    private route: ActivatedRoute,
    private router: Router,
    private $window: WindowRef
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((v) => {
      if (
        isEmpty(get(v, 'params.lang'), {}) || !this.getLocales().includes(get(v, 'params.lang'))
        ) {
        this.router.navigate(['.'], {
          queryParams: {
            lang: 'en'
          },
          relativeTo: this.route,
          preserveFragment: true
        });
        this.localeService.change('en');
      } else {
        this.localeService.change(get(v, 'params.lang'));
      }
    });
  }

  handleModalClick() {
    this.urlService.relocate();
  }


  getLocales() {
    return get(this.$window, 'nativeWindow.__data.languages', []);
  }

}
