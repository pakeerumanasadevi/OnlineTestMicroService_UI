import { Component, OnInit } from '@angular/core';
import { Userdata, MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username:string;
  user:Userdata;
  constructor(private myservice: MyserviceService, private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): any {
    let id=this.route.snapshot.paramMap.get('id');
    this.username=id;
    console.log(this.username);
    this.myservice.getUserProfile(this.username).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.user = response;
    console.log(response);
  }

}
