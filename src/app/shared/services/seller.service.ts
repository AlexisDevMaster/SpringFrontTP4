import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../class/product';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private sellersUrl: string;

  constructor(private http: HttpClient) {
    this.sellersUrl = 'http://localhost:8080/sellers';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.sellersUrl);
  }

  public save(user: Product): void {
    this.http.post<Product>(this.sellersUrl, user);
  }
}
