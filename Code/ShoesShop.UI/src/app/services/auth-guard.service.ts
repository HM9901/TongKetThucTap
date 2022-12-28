import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  isLogin = false;
  url = 'http://localhost:3000/auth';
  id!: string;
  constructor(private httpClient: HttpClient) {

  }

  login(){
    this.isLogin = true
  }

  isAuthenticated(){
    const promise = new Promise<boolean>((resolved, reject)=>{
      setTimeout(() => {
        resolved(this.isLogin);
      }, 1000);
    });
    return promise
  }

  public getAll():Observable<any> {
    return this.httpClient.get(this.url)
  }



  SignUp(id: number, username: string, password: string){
    return this.httpClient.post(this.url,{
      id,
      username,
      password
    })
  }

  logout(){
    this.isLogin = false;
  }
}
