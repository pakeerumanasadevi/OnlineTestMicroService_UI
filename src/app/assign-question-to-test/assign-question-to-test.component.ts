import { Component, OnInit } from '@angular/core';
import { MyserviceService, Questions } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-question-to-test',
  templateUrl: './assign-question-to-test.component.html',
  styleUrls: ['./assign-question-to-test.component.css']
})
export class AssignQuestionToTestComponent implements OnInit {

  questionId:number;
  testId:number;
  constructor(private myservice: MyserviceService, private router: Router) {

   }

  ngOnInit(): any {
  }
  onSubmit(agn:Questions){
    // this.myservice.assignTestUser(agn).subscribe(
      this.myservice.assignTestQuestion(this.testId,this.questionId).subscribe(
        data=>{
          
        }
      )
  }

}
