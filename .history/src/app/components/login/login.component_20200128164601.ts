import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
 
  logIn(form) {
    let data:User= form.value;
    this.authService.logIn(data.email,data.password)
    .then(result=>console.log(result))
    .catch(error=>console.log(error))
  }
}
