import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string;

  constructor(private authService: AuthService, private router: Router) {}

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

    let authObs: Observable<AuthResponseData>

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password)
    } else {
      authObs = this.authService.signUp(email, password)
    }
    authObs.subscribe(
        (resData) => {
          console.log(resData);
          this.isLoading = false;
          this.router.navigate(['/recipes'])
        },
        (errorMessage) => {
          this.error = errorMessage;
          this.isLoading = false;
        }
      );
    form.reset();
  }
}
