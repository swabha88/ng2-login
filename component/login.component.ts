import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '/login.model';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginService.logout();
    this.user = new User();
  }

  login() {
    if (this.user.email == null) {
      console.log(this.user.email);
    }

    // this._loginService.login(this.user.email,this.user.password);
    this.loginService.login(this.user).subscribe(res => {
      if (res == null) {
            console.log("Invalid username or passowrd.");
      } else {
        this.router.navigate(['home']);
      }
    }, error => {
       console.log("Invalid username or passowrd.");
    });
  }

}