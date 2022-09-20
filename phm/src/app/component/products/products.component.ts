import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

import { LoginservService } from 'src/app/service/loginserv.service';
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    searchKey: string = "";
    products = this.dta.products;

    constructor(public cartService: CartService, public dta: LoginservService) { }

    ngOnInit() {
        this.cartService.search.subscribe((val: any) => {
            this.searchKey = val;

        })
    }





    inc(item: any) {
        this.dta.products[item - 1].cnt += 1
        console.log(this.dta.products[item - 1].cnt);

        // console.log(this.dta.products[item]);

    }
    dec(item: any) {
        if (this.dta.products[item - 1].cnt > 0) {
            this.dta.products[item - 1].cnt -= 1
            console.log(this.dta.products[item - 1]);

        }


    }
    itemsCart: any = []
    addCart(cat: any) {
        console.log(cat);
        let cartDataNull = localStorage.getItem('localCart');
        if (cartDataNull == null) {
            let storeDataGet: any = [];
            storeDataGet.push(cat);
            localStorage.setItem('localCart', JSON.stringify(storeDataGet));
        }
        else {
            var idd = cat.id;
            let index: number = -1;
            this.itemsCart = JSON.parse(localStorage.getItem('localCart') as string);
            for (let i = 0; i < this.itemsCart.length; i++) {
                if (idd === this.itemsCart[i].id) {
                    this.itemsCart[i].cnt = cat.cnt;
                    index = 1;
                    break;
                }

            }
            if (index == -1) {
                this.itemsCart.push(cat);
                console.log(this.itemsCart)
                localStorage.setItem('localCart', JSON.stringify(this.itemsCart))
            }
            else {
                localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
            }

        }

    }


}
