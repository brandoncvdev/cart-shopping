import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../items-admin/items-admin.module').then(
        (m) => m.ItemsAdminPageModule
      ),
  },
  {
    path: 'add-item',
    loadChildren: () =>
      import('../add-item-admin/add-item-admin.module').then(
        (m) => m.AddItemAdminPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
