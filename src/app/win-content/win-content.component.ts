import { LocaleService } from './../locale.service';
import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../window.service';
import get from 'lodash/get';
@Component({
  selector: 'app-win-content',
  templateUrl: './win-content.component.html',
  styleUrls: ['./win-content.component.scss']
})
export class WinContentComponent implements OnInit {


  public isImageLoading: boolean = true;

  public data;

  constructor(
    private $window: WindowRef,
    public localeService: LocaleService
  ) { }

  ngOnInit() {
    this.data = get(this.$window, 'nativeWindow.__data.modal');
  }

  handleImageLoad() {
    this.isImageLoading = false;
  }

}
