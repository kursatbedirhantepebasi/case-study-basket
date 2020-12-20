import { Product } from './product.model';

export interface StoreState {
  list: Product[];
  basketProductList: Product[];
}
