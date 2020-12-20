import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {SharedModule} from '../../shared/shared.module';
import {BasketRoutingModule} from './basket-routing.module';
import * as _component from './components';
import * as _effects from './effects';

@NgModule({
  declarations: [_component.BasketComponent],
  imports: [
    BasketRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    EffectsModule.forFeature([_effects.BasketEffects])
  ]
})
export class BasketModule {}
