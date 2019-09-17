import { Component, OnInit } from '@angular/core';
import {ProductClass} from "../product-class";
import {HttpService} from "../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product = new ProductClass();
  products = []
  private errorMessage: any;


  constructor(
    private _httpService : HttpService,
    private _router : Router
  ) {
    this.errorMessage = {'title':'', 'imageUrl':''}
  }

  ngOnInit() {
  }

  CreateProduct(event: Event){
    event.preventDefault()
    this._httpService.createNewProduct(this.product).subscribe(result => {
      console.log(result)
      if(result['errors']){
        console.log('we having errors')
        this.errorMessage['title']=result['errors'].title.message
      }
      else{
        this._router.navigate(['products'])
      }
    })
    this.product = new ProductClass();
  }

  GoProduct(event: any) {
    event.preventDefault()
    this._router.navigate(['products'])
  }
}
