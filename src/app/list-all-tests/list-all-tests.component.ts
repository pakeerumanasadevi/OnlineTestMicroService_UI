import { Component, OnInit } from '@angular/core';
import { Test, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-all-tests',
  templateUrl: './list-all-tests.component.html',
  styleUrls: ['./list-all-tests.component.css']
})
export class ListAllTestsComponent implements OnInit {

  message: string;
  test:Test[];
 
  flag: boolean;
  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit(): any {
    this.myservice.getTest().subscribe( 
      response => this.handleSuccessfulResponse(response),
      );
  }
  handleSuccessfulResponse(response) {
    this.test = response;
    console.log(response);
  }
  error:string;
  delete(deletetest: Test): any {
    this.myservice.deleteTest(deletetest.testId).subscribe(data => {
      this.flag=true;
      this.message = data
    },
    error => { 
      if(error.status==500){
        console.log(error.error);
      this.error ="Delete unsuccesful because this Test ID is already assigned";
      this.flag=false;
     }}
    );
  }
  update(updateTest: Test) {
    this.myservice.updateTest(updateTest);
    this.router.navigate(['/updateTest']); //updating the question
    console.log('end of list all test update button')
  }
}
