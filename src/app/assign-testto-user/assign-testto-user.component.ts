import { Component, OnInit } from '@angular/core';
import { Test, MyserviceService, Userdata } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assign-testto-user',
  templateUrl: './assign-testto-user.component.html',
  styleUrls: ['./assign-testto-user.component.css']
})
export class AssignTesttoUserComponent implements OnInit {

  obj1: any;
  testId:number;
  userid:number;
  //testId:number;
  test:Test[];
  constructor(private myservice: MyserviceService, private router: Router
    ,private route:ActivatedRoute) { 
      this.obj1 = this.myservice.assignMethod();
    }

  ngOnInit(): any {
    this.myservice.getTest().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.test = response;
  }
  onSubmit(agn:Userdata){
   // this.myservice.assignTestUser(agn).subscribe(
     this.myservice.assignTestUser(this.obj1.userid,this.testId).subscribe(
       data=>{
         
       }
     )
      
     return console.log();
  }
}
