import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../common/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  carts: Cart[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addCart(cart: Cart){
    let theCartExists: boolean = false;
    let existingCart: Cart = undefined;

    if (this.carts.length > 0) {
      existingCart = this.carts.find(member => member.id === cart.id);
      theCartExists= (existingCart != undefined);
    }
    if (theCartExists) {
      existingCart.quantity++;
    } else {
      this.carts.push(cart);
    }

    this.calculateTotalPrice();
  }
  
  calculateTotalPrice() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    this.carts.forEach(element => {
      totalPriceValue += element.price * element.quantity;
      totalQuantityValue += element.quantity;
    }); 
    // publish the events
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }

  decrement(cart: Cart) {
    cart.quantity--;
    if (cart.quantity == 0) {
      this.removeCart(cart);
    } else {
      this.calculateTotalPrice();
    }
  }

  removeCart(cart: Cart) {
    const index = this.carts.findIndex((element) =>  element.id === cart.id)
    if (index > -1) {
      this.carts.splice(index, 1);
      this.calculateTotalPrice();
    }
  }
}
