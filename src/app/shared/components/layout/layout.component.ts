import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreState } from '../../models/store.model';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  productCount$: Observable<number>;

  constructor(private store: Store<StoreState>) {
    this.productCount$ = this.store
      .select('basketProductList')
      .pipe(map((products) => products.length));
  }
}
