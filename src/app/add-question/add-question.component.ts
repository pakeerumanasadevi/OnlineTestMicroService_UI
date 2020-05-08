import { Component, OnInit } from '@angular/core';
import { Questions, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  message: string;
  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(addQ:Questions):any{
    
    console.log(addQ);
     this.myservice.addQues(addQ).subscribe(data => {
      this.message=data});
      console.log('in addQuestion.ts');
      this.router.navigate(['listQuestions']);
  }

}
