import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private products: Object;

  constructor(
    private _httpService : HttpService,
    private _router: Router
  ) {
    this.GetAllProduct()
  }

  ngOnInit() {
  }
  GetAllProduct(){
    this._httpService.GetAllProduct().subscribe(result =>{
      console.log(result)
      this.products = result;
    })
  }

  DeleteProduct(id: any) {
    this._httpService.DeleteProduct(id).subscribe(result =>{
      console.log(result, 'deleted product')
      this.GetAllProduct()
    })
  }

  EditProduct(_id: any) {
    this._router.navigate(['products','edit',_id])
  }
}
