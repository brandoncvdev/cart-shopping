import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [IonicModule, IonicModule, CommonModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
