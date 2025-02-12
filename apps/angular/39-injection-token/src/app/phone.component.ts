import { Component } from '@angular/core';
import { TIMER_TOKEN } from './data';
import { TimerContainerComponent } from './timer-container.component';

@Component({
  selector: 'app-phone',
  imports: [TimerContainerComponent],
  providers: [{ provide: TIMER_TOKEN, useValue: 2000 }],
  template: `
    <div class="flex gap-2">
      Phone Call Timer:
      <p class="italic">(should be 2000ms)</p>
    </div>
    <timer-container />
  `,
})
export default class PhoneComponent {}
