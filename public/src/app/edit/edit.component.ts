import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
import {ProductClass} from "../product-class";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Object = new ProductClass;
  private errorsMessage: Object;
  constructor(
    private _httpService : HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

  }

  ngOnInit() {
    this.errorsMessage={ 'title': '', 'imageUrl':''}
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
    this.FindProduct(params['id']);
  })
  }
  FindProduct(id){
    this._httpService.FindOne(id).subscribe(product =>{

      this.product = product
      console.log(this.product)
    })
  }

  GoProduct(event:any) {
    event.preventDefault()
    this._router.navigate(['products'])
  }

  EditProduct(event: Event) {
    event.preventDefault()
    this._httpService.EditProduct(this.product).subscribe(result =>{
      console.log(result)
      if (result['errors']){
        this.errorsMessage['title']=result['errors'].title.message
        console.log("we having errors")
        console.log(this.errorsMessage)
      }
      else {
        this._router.navigate(['products'])
      }
    })
  }
}
