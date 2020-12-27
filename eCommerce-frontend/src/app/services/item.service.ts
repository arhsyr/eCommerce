import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../common/category';
import { Item } from '../common/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  private baseUrl = "http://localhost:8080/api/v1/items";
  private categoryUrl = "http://localhost:8080/api/v1/categories";

  constructor(private httpClient: HttpClient) { }

  getItems(categoryId: number, currentPage: number, pageSize: number): Observable<getRespose>{
    const searchUrl = 
    `${this.baseUrl}/search/category?id=${categoryId}&page=${currentPage}&size=${pageSize}`;
    return this.httpClient.get<getRespose>(searchUrl);
  }

  getItem(id: number): Observable<Item>{
    const itemUrl = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Item>(itemUrl);
  }

  search(keyword: string, currentPage: number, pageSize: number): Observable<getRespose>{
    const searchUrl = `${this.baseUrl}/search/keyword?name=${keyword}&page=${currentPage}&size=${pageSize}`;
    return this.httpClient.get<getRespose>(searchUrl);
  }

  private getAllItems(searchUrl: string): Observable<Item[]> {
    return this.httpClient.get<getRespose>(searchUrl).pipe(
      map(res => res._embedded.items)
    );
  }

  getCategories(): Observable<Category[]>{
      return this.httpClient.get<getResposeCategory>(this.categoryUrl).pipe(
        map(res => res._embedded.categories) 
      );
  }

}

interface getRespose{
  _embedded: {
    items: Item[];
  }
  page: {
    // number of records in each page 
    size: number,
    // number of records in database
    totalElements: number,
    // number of pages
    totalPages: number,
    // current page
    number: number
  }
}

interface getResposeCategory{
  _embedded: {
    categories: Category[];
  }
}