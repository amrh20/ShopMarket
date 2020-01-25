import { GoodsService } from './../../services/goods.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Good } from 'src/app/interfaces/interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor(private gs :GoodsService) { }
  goods : Good [] = []
  goodsObservable: Subscription;
   
  ngOnInit() {
    this.goodsObservable=this.gs.getAll().subscribe(data=> {
     this.goods= data.map(element => {
        return {
          id : element.payload.doc.id,
          name : element.payload.doc.data()['name'],
          price : element.payload.doc.data()['price'],
          imgUrl : element.payload.doc.data()['imgUrl'],
        }  
      })
    })
  }

  ngOnDestroy() {
    this.goodsObservable.unsubscribe()
  }
  addToCart(id) {
   console.log(id)
  }
}
