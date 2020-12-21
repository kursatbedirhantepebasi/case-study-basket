import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, mergeMap, tap } from 'rxjs/operators';
import { StoreState } from '../../../shared/models/store.model';

@Injectable()
export class BasketEffects {
  redirectToProducts$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('DELETE_PRODUCT'),
        mergeMap(() =>
          this.store.select('basketProductList').pipe(
            filter((list) => list.length === 0),
            tap(() => this.router.navigate(['/products']))
          )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<StoreState>,
    private router: Router
  ) {}
}
