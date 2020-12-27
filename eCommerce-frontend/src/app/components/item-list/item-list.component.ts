import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/common/cart';
import { Item } from 'src/app/common/item';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[];
  currentCategoryId: number = 1;
  checkKeyword: boolean = false;
  previousCategoryId: number = 1;

  // server-side properties
  currentPage: number = 1;
  pageSize: number = 12;
  totalRecords: number = 0;


  constructor(
    private _itemService: ItemService,
    private _activatedRoute: ActivatedRoute,
    private _cartService: CartService,
    private _config: NgbPaginationConfig,
    private _spinnerService: NgxSpinnerService
    ) {
      _config.maxSize = 3;
      _config.boundaryLinks = true;

   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(() => {
      this.checkSearch();
    })
  }

  checkSearch(){
    this._spinnerService.show();
    this.checkKeyword = this._activatedRoute.snapshot.paramMap.has('keyword');
    if (this.checkKeyword) {
      this.getSearch();
    } else {
      this.getItems();
    }
  }

  getItems() {
    const hasId: boolean = this._activatedRoute.snapshot.paramMap.has('id');
    if (hasId) {
      this.currentCategoryId = +this._activatedRoute.snapshot.paramMap.get('id')

    } else {
      this.currentCategoryId = 1
    }

    if (this.previousCategoryId != this.currentCategoryId){
      this.currentPage = 1;
    }

    this.previousCategoryId = this.currentCategoryId;

    this._itemService
    .getItems(this.currentCategoryId, this.currentPage - 1, this.pageSize)
    .subscribe(this.paginate())
  }

  getSearch(){
    const keyword: string = this._activatedRoute.snapshot.paramMap.get('keyword');
    this._itemService.search(keyword, this.currentPage - 1, this.pageSize).subscribe(
      this.paginate()
    );
  }

  paginate(){
    this._spinnerService.hide();
    return data => {
      this.items = data._embedded.items;
      this.currentPage = data.page.number + 1;
      this.totalRecords = data.page.totalElements;
      this.pageSize = data.page.size;
    }
  }

  addCart(item: Item) {
    const cart = new Cart(item);
    this._cartService.addCart(cart);
  }

}
