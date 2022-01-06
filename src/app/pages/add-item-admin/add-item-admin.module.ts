import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderAdminModule } from '@shared/components/header-admin/header-admin.module';

import { AddItemAdminPageRoutingModule } from './add-item-admin-routing.module';
import { AddItemAdminPage } from './add-item-admin.page';
import { ButtonSubmitModule } from '@shared/components/button-submit/button-submit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddItemAdminPageRoutingModule,
    ReactiveFormsModule,
    HeaderAdminModule,
    ButtonSubmitModule,
  ],
  declarations: [AddItemAdminPage],
})
export class AddItemAdminPageModule {}
