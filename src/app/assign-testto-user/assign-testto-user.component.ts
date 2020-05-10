import { Component, OnInit } from '@angular/core';
import { Test, MyserviceService, Userdata } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-assign-testto-user',
  templateUrl: './assign-testto-user.component.html',
  styleUrls: ['./assign-testto-user.component.css']
})
export class AssignTesttoUserComponent implements OnInit {

  obj1: any;
  testId:number;
  userid:number;
  error:string;
  test:Test[];
  flag:boolean;
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
  onSubmit(agn:Userdata):any{
  
     this.myservice.assignTestUser(this.obj1.userid,this.testId).subscribe(
       data=>{
        console.log(data);
        
       },
      error => { 
       if(error.status==404){
         console.log(error.error);
       this.error = error.error;
       this.flag=false;
      }
      else{
        console.log(error.error.text);
        this.error = error.error.text;
        this.flag=true;
      }
       }
     );
      
     return console.log();
  }
}
