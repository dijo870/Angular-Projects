import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router, private userService: UserService) { }
  username:string;
  password:string;
  ngOnInit() {

  }
  login() {
    let loginObj = {
      userName:this.username,
      password:this.password
    };
    this.userService.validateLogin(loginObj).subscribe(response => {

      if(response == true){
        this.router.navigate(['home']);
      }else{
        alert('Invalid Credentials');
      }
    });

  }

}
