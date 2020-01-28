import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  signUp(email,password) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
  }
}
