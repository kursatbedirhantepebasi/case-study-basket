import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as _components from './components';
import {LayoutComponent} from '../../shared/components';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: _components.BasketComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketRoutingModule {}
