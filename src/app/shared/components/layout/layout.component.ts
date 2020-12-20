import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  productCount$: Observable<number>;
}
