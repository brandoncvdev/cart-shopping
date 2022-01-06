import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsAdminPage } from './items-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ItemsAdminPage,
  },
  {
    path: 'agregar-item',
    loadChildren: () =>
      import('../add-item-admin/add-item-admin.module').then(
        (m) => m.AddItemAdminPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsAdminPageRoutingModule {}
