import { Component, OnInit } from '@angular/core';
import { AlertService } from '@app/shared/services/alert/alert.service';
import { ToastService } from '@app/shared/services/toast/toast.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toast: ToastService,
    private alert: AlertService
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
      this.toast.presentToast('Registro completo...', 'success');
      this.alert.presentAlertTypeUser();
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
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  private demoRegister(): void {
    this.form.patchValue({
      email: 'brandoning777@gmail.com',
      password: '1234',
    });
  }
}
