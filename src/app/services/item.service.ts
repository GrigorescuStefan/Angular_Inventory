import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  readonly baseUrl = 'http://127.0.0.1:5000';
  constructor(public httpClient: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.httpClient.get(this.baseUrl + '/piu/get_all_items') as Observable<Item[]>;
  }

  getItemById(_id: number): Observable<Item> {
    return this.httpClient.get(
      this.baseUrl + '/piu/get_item_by_id/' + _id
    ) as Observable<Item>;
  }

  createItem(item: Item): Observable<Item> {
    delete item._id;
    return this.httpClient.post(
      this.baseUrl + '/piu/create_item',
      item
    ) as Observable<Item>;
  }

  deleteItem(_id: number): Observable<string> {
    return this.httpClient.delete(
      this.baseUrl + '/piu/delete_item_by_id/' + _id
    ) as unknown as Observable<string>;
  }

  editItem(item: Item): Observable<string> {
    console.log(item)
    let _id = item._id
    delete item._id;
    return this.httpClient.put(
      this.baseUrl + '/piu/update_item/' + _id,
      item
    ) as unknown as Observable<string>;
  }
}