import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/common/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  
  carts: Cart[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(
    private _cartService: CartService
  ) { }

  ngOnInit(): void {
    this.showDetails();
  }

  showDetails(){
    this.carts = this._cartService.carts;
    this._cartService.totalPrice.subscribe(data => {
      this.totalPrice = data;
    })
    this._cartService.totalQuantity.subscribe(data => {
      this.totalQuantity= data;
    })
    this._cartService.calculateTotalPrice();
  }

  increment(cart: Cart){
    this._cartService.addCart(cart);
  }

  decrement(cart: Cart) {
    this._cartService.decrement(cart);
  }

  remove(cart: Cart){
    this._cartService.removeCart(cart);
  }

}
