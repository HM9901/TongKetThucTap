import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  usernamePattern = /^[a-z,0-9]{6,32}$/i;
  id!:number;
  constructor(private authService: AuthGuardService){
    this.authService.getAll().subscribe(data =>{
      this.id = data.length + 1
    })
  }


  public onSubmit(form: NgForm) {
    let username = form.value.username;
    let password = form.value.password;
    console.log(this.id);

    this.authService.SignUp(this.id, username, password).subscribe(res =>{
      console.log(res);
    })
  }
}
