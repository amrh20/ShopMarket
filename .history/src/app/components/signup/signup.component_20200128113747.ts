import { User } from './../../interfaces/user';
import { AuthService } from './../../../../.history/src/app/services/auth.service_20200128112234';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  signup(form) {
     let data: User= form.value;
     this.authService.signUp()
  }
}
