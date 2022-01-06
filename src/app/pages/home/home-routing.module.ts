import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'detalle-producto',
    loadChildren: () =>
      import('../product-detail/product-detail.module').then(
        (m) => m.ProductDetailPageModule
      ),
  },
  {
    path: 'mi-carrito',
    loadChildren: () =>
      import('../cart-shopping/cart-shopping.module').then(
        (m) => m.CartShoppingPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
