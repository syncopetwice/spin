import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

const animation = '5s cubic-bezier(0.075, 0.82, 0.165, 1)';

const Rotation = [
  trigger('rotate',
    [
      state('start', style({
        transform: 'rotate(0deg)'
      })),
      state('loose', style({
        transform: 'rotate(510deg)'
      })),
      state('win', style({
        transform: 'rotate(1100deg)'
      })),
      transition('start => loose', [
        animate(animation)
      ]),
      transition('loose => win', [
        animate(animation)
      ])
    ]
  )
];

export default Rotation;
