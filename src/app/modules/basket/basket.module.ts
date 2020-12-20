import * as _component from './components';
import {NgModule} from '@angular/core';
import {BasketRoutingModule} from './basket-routing.module';

@NgModule({
  declarations: [_component.BasketComponent],
  imports: [BasketRoutingModule]
})
export class BasketModule {}
