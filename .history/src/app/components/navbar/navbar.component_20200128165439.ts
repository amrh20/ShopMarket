import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isOpen:boolean= false;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  toggleNav() {
    this.isOpen= !this.isOpen;
  }
  logout() {
  this.authService.logout().then(()=> console.log("out"))
  }
}
