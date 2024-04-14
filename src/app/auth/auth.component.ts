import { Component, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceHolderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-root',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnDestroy{
  isLoginMode = true;
  isLoading = false;
  error: string;
  @ViewChild(PlaceHolderDirective) alertHost: PlaceHolderDirective;
  private closeSub: Subscription;

  constructor(private authService: AuthService, private router: Router, private viewContainerRef: ViewContainerRef) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
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
          this.showErrorAlert(errorMessage);
          this.isLoading = false;
        }
      );
    form.reset();
  }

  onHandleError() { 
    this.error = null
  }

  private showErrorAlert(message: string) {
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(AlertComponent)

    componentRef.instance.message = message

    this.closeSub = componentRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    })
  }
}
