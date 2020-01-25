import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire'
import { AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    GoodsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD5G8d7QGdGMDshTgODXoY7hDDxaLpMPoI",
      authDomain: "market-aab6e.firebaseapp.com",
      databaseURL: "https://market-aab6e.firebaseio.com",
      projectId: "market-aab6e",
      storageBucket: "market-aab6e.appspot.com",
      messagingSenderId: "996016385260",
      appId: "1:996016385260:web:8891ce6fe594b6cd7b49c9",
      measurementId: "G-RJWJNF00NL"
    }),
    AngularFirestoreModule
  ],
  providers: [
    { provide :FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
