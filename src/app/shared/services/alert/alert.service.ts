import { Injectable } from '@angular/core';
import {
  AlertInputAttributes,
  AlertTextareaAttributes,
  TextFieldTypes,
} from '@ionic/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

export interface AlertButton {
  text: string;
  role?: 'cancel' | 'destructive' | string;
  cssClass?: string | string[];
  handler?: (value: any) => boolean | void | { [key: string]: any };
}

export interface AlertInput {
  type?: TextFieldTypes | 'checkbox' | 'radio' | 'textarea';
  name?: string;
  placeholder?: string;
  value?: any;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  handler?: (input: AlertInput) => void;
  min?: string | number;
  max?: string | number;
  cssClass?: string | string[];
  attributes?: AlertInputAttributes | AlertTextareaAttributes;
  tabindex?: number;
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(
    public alertController: AlertController,
    private router: Router
  ) {}

  async presentAlertTypeUser() {
    const alert = await this.alertController.create({
      cssClass: 'alert-login',
      header: 'Tipo de usuario',
      //subHeader: 'Subtitle',
      message: '¿Deseas ingresar como administrador?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.router.navigateByUrl('/admin');

            console.log('Si');
          },
        },
        {
          text: 'No',
          handler: () => {
            this.router.navigateByUrl('/home');

            console.log('No');
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertRedirectAdmin() {
    const alert = await this.alertController.create({
      cssClass: 'alert-admin',
      header: 'Tipo de usuario',
      //subHeader: 'Subtitle',
      message: '¿Continuar creando productos?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            return;
            console.log('No');
          },
        },
        {
          text: 'No',
          handler: () => {
            this.router.navigateByUrl('/admin');

            console.log('Si');
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertDeleteItem(): Promise<boolean> {
    let deleteItem = false;
    const alert = await this.alertController.create({
      cssClass: 'alert-delete',
      header: 'Cuidado',
      //subHeader: 'Subtitle',
      message: '¿Deseas eliminar este producto?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            deleteItem = true;
          },
        },
        {
          text: 'No',
        },
      ],
    });

    await alert.present();
    return deleteItem;
  }
}
