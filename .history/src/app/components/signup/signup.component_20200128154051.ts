import { AuthService } from './../../services/auth.service';
import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  errorMessage: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  signup(form) {
     let data: User= form.value;
     this.authService.signUp(data.email,data.password)
     .then(data => console.log(data))
     .catch(err => 
      this.errorMessage=err.message)
    }
}
