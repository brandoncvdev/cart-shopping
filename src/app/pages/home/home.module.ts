import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListItemsModule } from '@shared/components/list-items/list-items.module';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { HeaderModule } from '@shared/components/header/header.module';
import { FancyBoxModule } from '@shared/components/fancy-box/fancy-box.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    ListItemsModule,
    HeaderModule,
    FancyBoxModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
