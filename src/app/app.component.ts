import { Component, OnInit } from '@angular/core';

import FastClick from 'fastclick';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    $(() => {
      FastClick.attach(document.body);
    });
  }
}
