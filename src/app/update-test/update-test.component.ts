import { Component, OnInit } from '@angular/core';
import { Test, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {

  obj1: any;
  message: string;
  test:Test[];
  constructor(private myservice: MyserviceService, private router: Router) { 
    this.obj1=this.myservice.updateTestMethod();
  }

  ngOnInit(): void {
  }
  onUpdateTest(ut:Test):any{
    this.myservice.onUpdateTest(ut).subscribe(data=>{
      this.message=data
    });
    return this.router.navigate(['listTest']);
  }
}
