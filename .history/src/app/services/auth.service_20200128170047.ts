import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:Observable<firebase.User>
  constructor(private angularFireAuth: AngularFireAuth) { 
    this.angularFireAuth.user
  }

  signUp(email,password) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
  }

  logIn(email,password) {
   return this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
  }

  logout() {
    return this.angularFireAuth.auth.signOut()
  }
}
