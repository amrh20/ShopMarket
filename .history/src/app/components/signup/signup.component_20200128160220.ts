import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  errorMessage: string;
  constructor(private authService: AuthService, private userService:UserService, private router:Router) { }

  ngOnInit() {
  }
  signup(form) {
     let data: User= form.value;
     this.authService.signUp(data.email,data.password)
     .then(res => {
      this.errorMessage=''
      this.userService.addNewUser(res.user.uid,data.name,data.address).then(()=>{
        this.router.navigate(['/'])
      })
    })
     .catch(error => 
      this.errorMessage=error.message)
    }
}
