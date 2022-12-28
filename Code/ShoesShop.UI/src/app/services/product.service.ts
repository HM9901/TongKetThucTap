import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../modules/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private REST_API_URL = 'http://localhost:3000/product';
  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  public getAllProducts(): Observable<any> {
    return this.httpClient.get(this.REST_API_URL,this.httpOptions);
  }

  public postProduct(product: Product): Observable<any> {
    return this.httpClient.post(this.REST_API_URL,product,this.httpOptions);
  }

  public getProduct(id: number): Observable<any> {
    return this.httpClient.get(this.REST_API_URL+'/'+id,this.httpOptions);
  }

  public updateProduct(id: number, product: Product): Observable<any>{
    return this.httpClient.put(this.REST_API_URL+'/'+id, product,this.httpOptions);
  }

  public deleteProduct(id: number): Observable<any>{
    return this.httpClient.delete(this.REST_API_URL+'/'+id, this.httpOptions);
  }
}
