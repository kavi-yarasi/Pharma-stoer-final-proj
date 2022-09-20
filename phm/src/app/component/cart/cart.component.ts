import { Component, OnInit } from '@angular/core';
import { LoginservService } from 'src/app/service/loginserv.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  data = this.dta.products;
  constructor(public dta: LoginservService) { }

  ngOnInit(): void {
  }

}
