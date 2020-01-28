import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isOpen:boolean= false;
  isUser:boolean= true;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe(user=>
      {
        if(user) this.isUser=true
        else this.isUser=false
      }
       )
  }
  toggleNav() {
    this.isOpen= !this.isOpen;
  }
  logout() {
  this.authService.logout().then(()=> console.log("out"))
  }
}
