import { Component, OnInit } from '@angular/core';
import { MyserviceService, Test } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  testid: number;

  test:Test;
  constructor(public myservice: MyserviceService, private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): any{
    let sub=this.route.params.subscribe(
      params=>{
        this.testid=+params['id'];
      }
    )
    console.log(this.testid);
    this.myservice.getResults(this.testid).subscribe(
      response =>{this.handleSuccessfulResponse(response);
      }
    );
  }
  handleSuccessfulResponse(response) {
    this.test = response;
    console.log(response);
    console.log(this.test);
  }
  go(){
    this.router.navigate(['report',this.testid]);
  }

}
