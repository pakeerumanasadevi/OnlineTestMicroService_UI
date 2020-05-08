import { Component, OnInit } from '@angular/core';
import { Userdata, MyserviceService } from '../myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result-report',
  templateUrl: './result-report.component.html',
  styleUrls: ['./result-report.component.css']
})
export class ResultReportComponent implements OnInit {

  testid: number;
  user:Userdata;
  constructor(private myservice: MyserviceService,private route:ActivatedRoute) { }

  ngOnInit(): any {
    let sub=this.route.params.subscribe(
      params=>{
        this.testid=+params['id'];
      }
    )
    this.myservice.getResultReport(this.testid).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.user = response;
    console.log(response);
  }

}
