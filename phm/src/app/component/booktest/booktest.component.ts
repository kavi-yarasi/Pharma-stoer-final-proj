import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { LoginservService } from 'src/app/service/loginserv.service';
@Component({
  selector: 'app-booktest',
  templateUrl: './booktest.component.html',
  styleUrls: ['./booktest.component.css']
})
export class BooktestComponent implements OnInit {

  fnc1(){
    this.router.navigate(['booktesdis']);
  }
  constructor(public serve:LoginservService,public router:Router) { }

  val1= new FormGroup({

    v1:new FormControl(''),

    v2:new FormControl(''),

    v3: new FormControl(''),

    v4:new FormControl('')

       });

  ngOnInit(): void {
  }

}
