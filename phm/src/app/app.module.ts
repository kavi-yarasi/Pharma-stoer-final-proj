import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchfilterPipe } from './shared/searchfilter.pipe'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { SignupComponent } from './component/signup/signup.component';
import { BooktestComponent } from './component/booktest/booktest.component';
import { BooktestdisComponent } from './component/booktestdis/booktestdis.component';
import { Nav1Component } from './nav1/nav1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
// import { ReactiveFormsComponent } from './component/reactive-forms/reactive-forms.component';

// import { NavComponent } from './compoent/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    CartComponent,
    SearchfilterPipe,
    LoginSignupComponent,
    SignupComponent,
    BooktestComponent,
    BooktestdisComponent,
    Nav1Component,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
