import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import * as _component from './components';
import { ProductListRoutingModule } from './product-list-routing.module';

@NgModule({
  declarations: [_component.ProductListComponent],
  imports: [ProductListRoutingModule, SharedModule],
})
export class ProductListModule {}
