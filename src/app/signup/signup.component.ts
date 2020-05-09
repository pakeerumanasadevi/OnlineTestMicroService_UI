import { Component, OnInit } from '@angular/core';
import { MyserviceService, Userdata } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  message: string;

  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(addemp:Userdata):any{
    
    console.log(addemp);
     this.myservice.addUser(addemp).subscribe(data => {
      this.message=data});
      console.log('in signup.ts');
     this.router.navigate(['login']);
  }

}
