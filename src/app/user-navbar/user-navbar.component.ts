import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  username:string;
  constructor(private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    this.username=id;
    console.log(this.username);
    
  }

}
