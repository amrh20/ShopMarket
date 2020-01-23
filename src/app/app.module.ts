import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
