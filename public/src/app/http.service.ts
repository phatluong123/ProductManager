import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){

  }
  createNewProduct(data) {
    console.log(data)
    return this._http.post('/newProduct', data)
  }
  GetAllProduct(){
    return this._http.get('/AllProducts')
  }
  DeleteProduct(id){
    return this._http.delete('/DeleteProduct/'+id)
  }
  FindOne(id){
    return this._http.get('/product/'+id)
  }
  EditProduct(data){
    return this._http.put('/EditProduct', data)
  }
}


