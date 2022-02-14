import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { IProduct } from '../ViewModel/iproduct';
import { ICategory } from '../ViewModel/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  httpOption:any;
  constructor(private httpClient:HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    };
  }

  getAllProduct():Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/ProductList`);
  }
  getAllCatogery():Observable<ICategory[]>
  {
    return this.httpClient.get<ICategory[]>(`${environment.APIURL}/categoryList`);
  }

 filterCat(catId:number):Observable<IProduct[]> {

  return this.httpClient.get<IProduct[]>(`${environment.APIURL}/ProductList?categoryID=${catId}`);
}

 findProductById(prod:number):Observable<IProduct>
  {

  return this.httpClient.get<IProduct>(`${environment.APIURL}/ProductList/${prod}`);

  //let product=this.httpClient.get<IProduct>(`${environment.APIURL}/ProductList?categoryID=${prodId}`);
  //return product?product: {} as Observable<IProduct>;
}

// getProdById(id:number){
//   return this.httpClient.get(`${environment.APIURL}/ProductList?categoryID=${id}`);
// }

addNewProduct(prod:IProduct):Observable<IProduct>
{
  return this.httpClient.post<IProduct>(`${environment.APIURL}/ProductList`, prod)
}


editProduct(id:number,product:IProduct){
  return this.httpClient.put(`${environment.APIURL}/ProductList/${product.id}`,product)

}

// updateProduct(product:IProduct,id:number){
//   return this.httpClient.post<string>(`${environment.APIURL}/ProductList`, product)
// }
deleteProduct(id:number):Observable<unknown>{
  return this.httpClient.delete(`${environment.APIURL}/ProductList/${id}`,this.httpOption)
}

}
