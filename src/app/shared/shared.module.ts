import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as _components from './components';

const COMPONENTS = [
  _components.DummyComponent,
  _components.LayoutComponent
  ];

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, CommonModule],
})
export class SharedModule {}
