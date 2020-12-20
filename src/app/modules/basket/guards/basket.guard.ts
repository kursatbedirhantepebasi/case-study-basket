import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreState } from '../../../shared/models/store.model';

@Injectable()
export class BasketGuard implements CanActivate {
  constructor(private store: Store<StoreState>, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.store.select('basketProductList').pipe(
      map((list) => {
        if (list.length > 0) return true;

        return this.router.createUrlTree(['/products']);
      })
    );
  }
}
