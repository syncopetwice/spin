import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { zoomIn } from 'ng-animate';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('modal', [transition('* => *', useAnimation(zoomIn, {
      params: {
        timing: 0.5
      }
    }))])
  ]
})
export class ModalComponent implements OnInit {

  modal: any;

  @Input() isOpen;

  constructor() {}

  ngOnInit() {}

  close() {
    this.isOpen = false;
  }

}
