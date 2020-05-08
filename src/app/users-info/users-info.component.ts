import { Component, OnInit } from '@angular/core';
import { Userdata, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent implements OnInit {

  employees: Userdata[];
  constructor(private myservice: MyserviceService, private router: Router) {
  }

  ngOnInit(): any {
    this.myservice.getUsers().subscribe(
      
      response => this.handleSuccessfulResponse(response),
    );
  
  }
 
  handleSuccessfulResponse(response) {
    this.employees = response;
    console.log(response);
  }
}
