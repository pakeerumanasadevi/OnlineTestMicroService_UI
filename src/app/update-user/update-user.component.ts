import { Component, OnInit } from '@angular/core';
import { Userdata, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  obj1: any;
  employees: Userdata[];
  message: string;
  flag=false;
  constructor(private myservice: MyserviceService, private router: Router) {
    this.obj1 = this.myservice.updateMethod();
    console.log(this.obj1);
  }
  onUpdate(uemployee: Userdata): any {
    console.log('in update.ts before final');
     this.myservice.onUpdate(uemployee).subscribe(data => {
       this.flag=true;
      this.message = data
    });
    // return this.router.navigate(['listUser']);
  }
  ngOnInit(): void {
  }
}
