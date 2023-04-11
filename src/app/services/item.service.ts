import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  readonly baseURL = 'http://localhost:44385/api/item';
  constructor(public httpClient: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.httpClient.get(this.baseURL + 'get') as Observable<Item[]>;
  }

  getItemById(id: number): Observable<Item> {
    return this.httpClient.get(this.baseURL + 'getitems/' + id) as Observable<Item>;
  }

  createItem(item: Item): Observable<Item> {
    return this.httpClient.post(this.baseURL + 'post', item) as Observable<Item>;
  }

  deleteItem(id: number): Observable<null> {
    return this.httpClient.delete(this.baseURL + 'delete/' + id) as unknown as Observable<null>;
  }

  editItem(item: Item): Observable<null> {
    return this.httpClient.put(this.baseURL + 'edit/' + item.id, item) as unknown as Observable<null>;
  }
}
