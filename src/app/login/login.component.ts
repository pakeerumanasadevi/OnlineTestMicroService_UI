import { Component, OnInit } from '@angular/core';
import { MyserviceService, Userdata } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myservice: MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(u:Userdata){
    console.log(u);
    this.myservice.login(u).subscribe(
      users=>{
        console.log(users);
        if(users=="admin")
            this.router.navigate(['home']);
        else if(users=="student"){
             this.router.navigate(['/userNavbar',u.username]);}
        else if(users=="no")
           return alert("Enter correct credentials");
      }
    );
  }


      


}
