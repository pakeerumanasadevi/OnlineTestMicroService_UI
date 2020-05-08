import { Component, OnInit } from '@angular/core';
import { Questions, MyserviceService, Test } from '../myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listt-all-questions',
  templateUrl: './listt-all-questions.component.html',
  styleUrls: ['./listt-all-questions.component.css']
})
export class ListtAllQuestionsComponent implements OnInit {

  message: string;
  Ques:Questions[];
  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit(): any {
    this.myservice.getQuestions().subscribe( 
      response => this.handleSuccessfulResponse(response),
      );
  }

  handleSuccessfulResponse(response) {
    this.Ques = response;
    console.log(response);
  }

  update(updateques: Questions) {
    this.myservice.updateQuestion(updateques);
    this.router.navigate(['/updateQuestion']); //updating the question
    console.log('end of list all question update button')
  }
  delete(deleteques: Questions): any {
    this.myservice.deleteQues(deleteques.questionId).subscribe(data => {
      this.message = data
    });
  }
  assign(t:Questions){
    this.myservice.assignQtoT(t);
    this.router.navigate(['/assignTQ']);
  }
}
