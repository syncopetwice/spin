import { UrlService } from './url.service';
import { Component, OnInit } from '@angular/core';

import FastClick from 'fastclick';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private urlService: UrlService
  ) {}

  ngOnInit(): void {
    $(() => {
      FastClick.attach(document.body);
    });

    setTimeout(() => {
      this.urlService.relocate();
    }, 180000);

  }
}
