import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/common/cart';
import { Item } from 'src/app/common/item';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  item: Item = new Item();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _itemService: ItemService,
    private _cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(){
    const id: number = +this._activatedRoute.snapshot.paramMap.get('id');
    this._itemService.getItem(id).subscribe(
      data => this.item = data
    );
  }

  addCart(){
    const cart: Cart = new Cart(this.item);
    this._cartService.addCart(cart);
  }

}
