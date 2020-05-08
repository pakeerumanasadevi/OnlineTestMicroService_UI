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
  delete(deletetest: Test): any {
    this.myservice.deleteTest(deletetest.testId).subscribe(data => {
      this.message = data
    });
  }
  update(updateTest: Test) {
    this.myservice.updateTest(updateTest);
    this.router.navigate(['/updateTest']); //updating the question
    console.log('end of list all test update button')
  }
}
