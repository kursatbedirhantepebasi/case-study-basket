import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dummy',
  template: ` <router-outlet></router-outlet> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DummyComponent {}
