import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartShoppingPage } from './cart-shopping.page';

const routes: Routes = [
  {
    path: '',
    component: CartShoppingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartShoppingPageRoutingModule {}
