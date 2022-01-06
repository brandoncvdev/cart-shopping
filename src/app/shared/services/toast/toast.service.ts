import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

export interface ToastButton {
  text?: string;
  icon?: string;
  side?: 'start' | 'end';
  role?: 'cancel' | string;
  cssClass?: string | string[];
  handler?: () => boolean | void | Promise<boolean | void>;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(public toastController: ToastController) {}

  async presentToast(message: string, color?: string) {
    const toast = await this.toastController.create({
      //header: 'Toast header',
      message,
      icon: 'information-circle',
      position: 'bottom',
      duration: 3000,
      color,
      // buttons: [
      //   {
      //     side: 'start',
      //     icon: 'star',
      //     text: 'Favorite',
      //     handler: () => {
      //       console.log('Favorite clicked');
      //     }
      //   }, {
      //     text: 'Done',
      //     role: 'cancel',
      //     handler: () => {
      //       toast.onDidDismiss();
      //       console.log('Cancel clicked');
      //     }
      //   }
      // ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
