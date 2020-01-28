import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  signUp(email,password) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
  }

  logIn(email,password) {
   return this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
  }
}
