import snq from 'snq';
import { Product } from '../../shared/models/product.model';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export function addProduct(state: Product[] = [], action) {
  const index = state
    .map((e) => e.productId)
    .indexOf(snq(() => action.payload.productId, -1));

  switch (action.type) {
    case ADD_PRODUCT: {
      return index === -1
        ? [...state, action.payload]
        : state.map((stateDetail) =>
            stateDetail.productId === action.payload.productId
              ? {
                  ...stateDetail,
                  quantity: stateDetail.quantity + action.payload.quantity,
                }
              : stateDetail
          );
    }
    case DELETE_PRODUCT: {
      return index === -1
        ? state
        : [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default:
      return state;
  }
}
