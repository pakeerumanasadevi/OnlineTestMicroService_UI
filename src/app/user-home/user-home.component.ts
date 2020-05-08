import { Component, OnInit } from '@angular/core';
import { Test, MyserviceService, Userdata } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

 username:string;
 test:Test;
 constructor(private myservice: MyserviceService, private router: Router,
  private route:ActivatedRoute)
 {}
  ngOnInit(): any {
    let id=this.route.snapshot.paramMap.get('id');
    this.username=id;
    console.log(this.username);
    this.myservice.getTestbyName(this.username).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
 handleSuccessfulResponse(response) {
    this.test = response;
    console.log(response);
  }
  taketest(id:number){
    this.router.navigate(['taketest',id]);
  }
}
