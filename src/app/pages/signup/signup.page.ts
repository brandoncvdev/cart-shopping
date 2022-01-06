import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '@app/shared/services/alert/alert.service';
import { ToastService } from '@app/shared/services/toast/toast.service';
import { confirmPasswordValidator } from '@app/shared/validators/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toast: ToastService,
    private alert: AlertService
  ) {
    this.form = new FormGroup({});
  }

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
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      passwordConfirm: [null, [Validators.required, confirmPasswordValidator]],
    });
  }

  private demoRegister(): void {
    this.form.patchValue({
      name: 'Brandon',
      email: 'test@test.com',
      password: '1234',
      passwordConfirm: '1234',
    });
  }
}
