import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/User';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usernamePattern = /^[a-z,0-9]{6,32}$/i;
  data!:User;
  authen!:boolean;
  err!:string;
  constructor(private authGuard:AuthGuardService, private router:Router){

  }
  public onSubmit(form: NgForm) {
    let username = form.value.username;
    let password = form.value.password;
    this.authGuard.getAll().subscribe(data => {
      for(let i = 0; i< data.length;i++){
        console.log(data[i].username);
        if(data[i].username == username){
          if(data[i].password == password){
            this.authGuard.login()
            localStorage.setItem('UserName', data[i].username)
            localStorage.setItem('IsValid', 'True')
            this.router.navigate(['/product'])
          }
          else { this.err = 'Passwords is not correct'}
        }
        else { this.err = 'Username is not correct'}
      }
    })
  }
}
