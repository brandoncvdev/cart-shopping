import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from './header-admin.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HeaderAdminComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderAdminComponent],
})
export class HeaderAdminModule {}
