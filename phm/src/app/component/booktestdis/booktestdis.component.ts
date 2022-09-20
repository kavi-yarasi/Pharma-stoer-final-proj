import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginservService } from 'src/app/service/loginserv.service';

@Component({
  selector: 'app-booktestdis',
  templateUrl: './booktestdis.component.html',
  styleUrls: ['./booktestdis.component.css']
})
export class BooktestdisComponent implements OnInit {

  constructor(public serv:LoginservService,public router:Router) { 
   
  }

  values=this.serv.values;
  
  ngOnInit(): void {
  }
  
}
