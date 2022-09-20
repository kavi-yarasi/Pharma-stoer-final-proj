import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {path:'login',component:LoginSignupComponent},
  {path:'signup',component:SignupComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
