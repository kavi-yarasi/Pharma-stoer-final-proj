import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { SignupComponent } from './component/signup/signup.component';
import { BooktestdisComponent } from './component/booktestdis/booktestdis.component';
import { BooktestComponent } from './component/booktest/booktest.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:'login',component:LoginSignupComponent},
  {path:'signup',component:SignupComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'booktesdis',component:BooktestdisComponent},
  {path:'booktest',component:BooktestComponent},
  // {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
