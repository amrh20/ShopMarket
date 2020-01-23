import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goods : Good [] = [
    { name : "watch", price: 100, imgUrl:"assets/images/product.png"},
    { name : "watch", price: 100, imgUrl:"assets/images/product.png"},
    { name : "watch", price: 100, imgUrl:"assets/images/product.png"},
    { name : "watch", price: 100, imgUrl:"assets/images/product.png"}
  ]
  addToCart(index) {
   console.log(this.goods[index])
  }
}
