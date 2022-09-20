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
    this.router.navigate(['booktestdis']);
  }
  constructor(public serve:LoginservService,public router:Router) { }

  ngOnInit(): void {
  }

}
