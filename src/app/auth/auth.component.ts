import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    this.isLoading = true;
    if (form.invalid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      //...
    } else {
      this.authService.signUp(email, password).subscribe(
        (resData) => {
          console.log(resData);
          this.isLoading = false;
        },
        (error) => {
          console.log(error);
          this.error = 'An error occured!'
          this.isLoading = false;
        }
      );
    }
    form.reset();
  }
}
