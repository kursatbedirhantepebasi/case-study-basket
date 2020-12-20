import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../../../shared/models/product.model';
import { StoreState } from '../../../../shared/models/store.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  list$: Observable<Product[]>;
  basketProductList$: Observable<Product[]>;

  constructor(private store: Store<StoreState>) {
    this.list$ = this.store.select('list');
    this.basketProductList$ = this.store.select('basketProductList');
  }

  addProduct(product: Product) {
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: product,
    });
  }
}
