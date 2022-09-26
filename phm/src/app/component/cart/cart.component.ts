import { Component, OnInit } from '@angular/core';
import { LoginservService } from 'src/app/service/loginserv.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  data = this.dta.products;
  total: number = 0;
  constructor(public dta: LoginservService) {
    for (let index = 0; index < this.data.length; index++) {
      this.total += (this.data[index].price * this.data[index].cnt)
    }
  }
  ngOnInit(): void {
  }
}
