import { Component, OnInit } from '@angular/core';
import { AlertService } from '@app/shared/services/alert/alert.service';
import { ToastService } from '@app/shared/services/toast/toast.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '@app/shared/services/cart/cart.service';

@Component({
  selector: 'app-add-item-admin',
  templateUrl: './add-item-admin.page.html',
  styleUrls: ['./add-item-admin.page.scss'],
})
export class AddItemAdminPage implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toast: ToastService,
    private alert: AlertService,
    private cart: CartService
  ) {}

  ngOnInit() {
    this.createForm();
    this.demoRegister();
  }

  public submitForm(): void {
    const value = this.form.value;
    const valid = this.form.valid;
    console.log(value, valid);
    if (valid) {
      this.toast.presentToast('Producto agregado', 'success');
      const generateID = this.cart.getCart().length + 1;
      value.id = generateID;
      this.cart.addProduct(value);
      this.alert.presentAlertRedirectAdmin();
    } else {
      this.toast.presentToast('Revisa los campos', 'warning');
    }
  }

  public errorControl(name: string, type?: string): boolean {
    const typeLocal = type ? type : 'required';
    return this.form.get(name).hasError(typeLocal);
  }

  public controlTouched(name: string): boolean {
    //console.log(this.form.get(name).hasError(name));
    return this.form.get(name).touched;
  }

  private createForm(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  private demoRegister(): void {
    // this.form.patchValue({
    //   name: 'brandoning777@gmail.com',
    //   price: '1234',
    //   description: ''
    // });
  }
}
