import { Component, OnInit } from '@angular/core';
import { MyserviceService, Questions } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-question-to-test',
  templateUrl: './assign-question-to-test.component.html',
  styleUrls: ['./assign-question-to-test.component.css']
})
export class AssignQuestionToTestComponent implements OnInit {

  obj1: any;
  questionId:number;
  testId:number;
  error:string;
  flag:boolean;
  constructor(private myservice: MyserviceService, private router: Router) {
    this.obj1 = this.myservice.assignQtoTMethod();
   }

  ngOnInit(): any {
  }
  onSubmit(agn:Questions){
    // this.myservice.assignTestUser(agn).subscribe(
      this.myservice.assignTestQuestion(this.testId,this.obj1.questionId).subscribe(
        data=>{
         
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
      )
  }

}
