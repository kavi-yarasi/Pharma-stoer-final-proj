import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { LoginservService } from 'src/app/service/loginserv.service';
@Component({
  selector: 'app-booktest',
  templateUrl: './booktest.component.html',
  styleUrls: ['./booktest.component.css']
})
export class BooktestComponent implements OnInit {
  test: any = [];
  testsel!: Number;
  txt1!: string;
  vall = this.serv.vall;
  dta = this.serv.values;
  nm: any
  constructor(public serv: LoginservService, public router: Router) {
    console.log(this.testsel);

  }
  ngOnInit() {
    this.test = [{ Id: 1, Test: "Select Lab tests" },
    { Id: 2, Test: "LFT" },
    { Id: 3, Test: "Insulin" },
    { Id: 4, Test: "Ferritin" },
    { Id: 5, Test: "Potassium serum Plasma" },
    { Id: 6, Test: "Chloesterol" },
    { Id: 7, Test: "Platelet count" }
    ];


  }
  fnc1() {
    console.log(this.vall.value);
    this.dta.v1 = JSON.stringify(this.vall.value.v1);
    this.dta.v2 = JSON.stringify(this.vall.value.v2);
    this.dta.v3 = JSON.stringify(this.vall.value.v3);
    console.log();
    this.nm = this.testsel
    console.log();
    this.dta.v4 = JSON.stringify(this.test[this.nm - 1].Test);
    this.router.navigate(['booktesdis']);
  }

  ontestsel(val: any) {
    return (val)
  }




}
