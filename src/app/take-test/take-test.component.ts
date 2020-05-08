import { Component, OnInit } from '@angular/core';
import { MyserviceService,Questions } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit {

  ////////////
  qid:number[];
  ////////////////
  pager={
    index:0,
    size:1,count:1
  };
  testid:number;
  private sub:any;
  questions:Questions[];
  constructor(public myservice: MyserviceService, private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): any {
    let sub=this.route.params.subscribe(
      params=>{
        this.testid=+params['id'];
      }
    )
    console.log(sub);
    console.log(this.testid);
    this.myservice.getQuestionsForUser(this.testid).subscribe(
      response =>{this.handleSuccessfulResponse(response);
        this.pager.count=this.questions.length;
        console.log(this.pager.count);
      }
    );
  }

  handleSuccessfulResponse(response) {
    this.questions = response;
    console.log(response);
  }
  //////////////////////
  Valid=false;
  arrays:any=[];
  option:string[]= new Array(5);
  onSubmit(value:any){
    console.log(this.option);
    console.log(this.arrays);
    this.myservice.sendingChoosenValues(this.arrays,this.testid).subscribe(response=>{
      console.log(response);
    });
    this.router.navigate(['result',this.testid]);
  }
  
  radioChangeHandler(event:any, name: any,id:number){
    let numb = Number(name);
    this.option[numb]=event.target.value;
    let answers=[];
    this.questions.forEach(x=>{if(x.questionId==id){x.choosenAnswer=this.option[numb]}});
    this.questions.forEach(x=>answers.push({'questionId':x.questionId,'choosenAnswer':x.choosenAnswer}));
    console.log(answers);
   // console.log(answers[0]);
    this.arrays=answers;
    let count=0;
    for(let j=0;j<5;j++){
      if(this.option[j]!=null){
          count++;
      }
    }
    if(count==2){//==5 later
      this.Valid=true;
    }

  }
  
}
