import { createReducer } from '@ngrx/store';
import { Product } from '../../shared/models/product.model';

export const mockProductList: Product[] = [
  { name: 'product1', price: 15, productId: 'product1Id', quantity: 1 },
  { name: 'product2', price: 20, productId: 'product2Id', quantity: 1 },
  { name: 'product3', price: 30, productId: 'product3Id', quantity: 1 },
  { name: 'product4', price: 40, productId: 'product4Id', quantity: 1 },
  { name: 'product5', price: 50, productId: 'product5Id', quantity: 1 },
];

const productListReducer = createReducer(mockProductList);

export function getProductList(state, action) {
  return productListReducer(state, action);
}
