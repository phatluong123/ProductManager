import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListComponent} from "./list/list.component";
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {ProductComponent} from "./product/product.component";


const routes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'products',component: ProductComponent , children :[
      { path: '',component: ListComponent },
      { path: 'new',component: CreateComponent },
      { path: 'edit/:id',component: EditComponent }
]},

  { path: '', pathMatch: 'full', redirectTo: '/products' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
