import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface AuthResponseData {
    kind: string
    idToken: string;
    email: string;    
    refreshToken: string
    expiresIn: string
    loaclId: string
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email:string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDCFtBFKgNtHBR2VVRkkwE2Pl9ckA11LD4',
      {
        email: email,
        password: password,
        returnSecureToken: true
    }
    );
  }
}
