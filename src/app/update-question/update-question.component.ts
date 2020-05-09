import { Component, OnInit } from '@angular/core';
import { Questions, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  obj1: any;
  message: string;
  ques:Questions[];
  constructor(private myservice: MyserviceService, private router: Router) {
    console.log('updtaQuestion method in update question.ts');
    this.obj1 = this.myservice.updateQuesMethod();
   }

  ngOnInit(): void {
  }
  onUpdateQuestion(uq:Questions):any{
    console.log('before real update in update question.ts');
    this.myservice.onUpdateQuestion(uq).subscribe(data => {
      this.message = data
    });
    console.log('after real update in update question.ts');
    // return this.router.navigate(['listQuestions']);
  }

}
