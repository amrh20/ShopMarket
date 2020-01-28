import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  signUp(email,password) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
  }
}
