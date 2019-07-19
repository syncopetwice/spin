import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  SimpleChanges,
  OnChanges,
  OnDestroy
 } from '@angular/core';

import get from 'lodash/get';

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';

import {
  trigger,
  transition,
  useAnimation
} from '@angular/animations';

import {
  zoomIn
} from 'ng-animate';

declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('modal', [
      transition(
        ':enter',
        useAnimation(zoomIn, {
          params: {
            timing: 0.5
          }
        })
      )
    ])
  ]
})
export class ModalComponent implements OnInit, OnChanges, OnDestroy {

  modal: any;

  @Input() isOpen: boolean;
  // @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() modalClick: EventEmitter<any> = new EventEmitter();

  // @HostListener('document:keyup', ['$event'])
  // handleEscapeKey(event: KeyboardEvent) {
  //   if (
  //     this.isOpen
  //     && event.key === 'Escape'
  //     ) {
  //     this.handleClose();
  //   }
  // }

  constructor() {}

  body: HTMLBodyElement;

  ngOnInit(): void {
    this.body = document.querySelector('#app-body');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      get(changes, ['isOpen'])
      && !get(changes, 'isOpen.firstChange')
      ) {
      const state = changes.isOpen.currentValue;
      this.setIsOpenModalState({
        state
      });
    }
  }

  ngOnDestroy(): void {
    clearAllBodyScrollLocks();
  }

  handleModalClick() {
    this.modalClick.emit();
  }

  handleClose() {
    this.isOpen = false;
    this.setIsOpenModalState({ state: this.isOpen });
    // this.close.emit(null);
  }

  setIsOpenModalState({ state }) {

    const options = {
      reserveScrollBarGap: true
    };

    if (state) {
      disableBodyScroll(this.body, options);
    } else {
      enableBodyScroll(this.body);
    }
  }

}
