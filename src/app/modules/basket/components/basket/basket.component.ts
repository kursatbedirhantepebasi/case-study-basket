import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../../../../shared/models/product.model';
import { StoreState } from '../../../../shared/models/store.model';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketComponent implements OnDestroy {
  basketProductList: Product[];
  form: FormGroup;
  private destroy$ = new Subject();

  get productsFormArray(): FormArray {
    return this.form.get('products') as FormArray;
  }

  constructor(private store: Store<StoreState>, private fb: FormBuilder) {
    this.store
      .select('basketProductList')
      .pipe(takeUntil(this.destroy$))
      .subscribe((basketProductList) => {
        this.basketProductList = basketProductList;
        this.form = this.fb.group({
          products: this.fb.array(
            basketProductList.map(
              (value) =>
                new FormControl(value.quantity, [
                  Validators.min(1),
                  Validators.required,
                ])
            )
          ),
        });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  deleteProduct(product: Product): void {
    this.store.dispatch({
      type: 'DELETE_PRODUCT',
      payload: product,
    });
  }

  confirmBasket() {
    //do something
  }
}
