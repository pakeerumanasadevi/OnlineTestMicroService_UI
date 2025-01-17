import { Component, OnInit } from '@angular/core';
import { Userdata, MyserviceService, Test } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-all-users',
  templateUrl: './list-all-users.component.html',
  styleUrls: ['./list-all-users.component.css']
})
export class ListAllUsersComponent implements OnInit {

  
  message: string;
  employees: Userdata[];
  error: string;
  flag: boolean;
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
  update(updateemployee: Userdata) {
    this.myservice.update(updateemployee);
    this.router.navigate(['/updateUser']); //updating the employee
  }
  delete(deleteemployee: Userdata): any {
    this.myservice.delete(deleteemployee.userid).subscribe(data => {
      this.flag=true;
      this.message = data
    },
    error => { 
      if(error.status==500){
        console.log(error.error);
      this.error ="Delete Unsuccesful";
      this.flag=false;
     }}
    );
   // this.router.navigate(['/listemp']);
  }
  assign(a:Userdata){
    this.myservice.assign(a);
    this.router.navigate(['/assignTU']);
  } 
}
