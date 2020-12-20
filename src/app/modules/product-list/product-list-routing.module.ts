import {RouterModule, Routes} from '@angular/router';
import * as _components from './components';
import {NgModule} from '@angular/core';
import {LayoutComponent} from '../../shared/components';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: _components.ProductListComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListRoutingModule {}
