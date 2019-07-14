import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-win-content',
  templateUrl: './win-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./win-content.component.scss']
})
export class WinContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
