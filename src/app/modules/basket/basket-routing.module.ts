import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from '../../shared/components';
import * as _components from './components';
import * as _guards from './guards';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [_guards.BasketGuard],
    children: [{ path: '', component: _components.BasketComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [_guards.BasketGuard]
})
export class BasketRoutingModule {}
