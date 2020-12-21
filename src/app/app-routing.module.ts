import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './shared/components';

const routes: Routes = [
  {
    path: 'product-list',
    component: DummyComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/product-list/product-list.module').then(
            (m) => m.ProductListModule
          ),
      },
    ],
  },
  {
    path: 'basket',
    component: DummyComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/basket/basket.module').then((m) => m.BasketModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/product-list',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
