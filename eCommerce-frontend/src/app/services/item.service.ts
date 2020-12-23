import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../common/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  private baseUrl = "http://localhost:8080/api/v1/items";

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Item[]>{
    return this.httpClient.get<getRespose>(this.baseUrl).pipe(
      map(res => res._embedded.items) 
    );
  }
}


interface getRespose{
  _embedded: {
    items: Item[];
  }
}
