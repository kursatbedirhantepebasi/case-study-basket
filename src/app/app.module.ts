import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { getProductList } from './reducers/product-list/product-list.reducer';
import { addProduct } from './reducers/basket/basket.reducer';
import { EffectsModule } from '@ngrx/effects';

const MODULES = [SharedModule, AppRoutingModule, BrowserModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...MODULES,
    EffectsModule.forRoot(),
    StoreModule.forRoot({
      list: getProductList,
      basketProductList: addProduct,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
