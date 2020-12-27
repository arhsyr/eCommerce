import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  

  categories: Category[];

  constructor(
    private _itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this._itemService.getCategories().subscribe(
      data => this.categories = data
    );
  }

}
