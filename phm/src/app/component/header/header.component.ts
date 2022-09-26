import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { LoginservService } from 'src/app/service/loginserv.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searchTerm !: string;
  searchkey: string = "";
  tot = 0
  valu = this.lgn.products
  constructor(public cartService: CartService, public lgn: LoginservService) {

    for (var i = 0; i < this.valu.length; i++) {
      this.tot += this.valu[i].cnt;
      // console.log(this.valu[i].cnt);
    }
  }
  fnc() {
    // console.log(this.valu[0].cnt);
    this.tot = 0
    for (var i = 0; i < this.valu.length; i++) {
      this.tot = this.tot + this.valu[i].cnt;
      // console.log(this.tot);
    }
    return this.tot

  }
  fcn() {
  }
  ngOnInit(): void {
    this.cartService.search.subscribe(val => {
      this.searchkey = val;

    })
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}