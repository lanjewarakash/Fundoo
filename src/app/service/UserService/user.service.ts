import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { IUserSignIn, IUserRegistration, IUserForgotPassword, IUserResetPassword } from '../model/defineData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService ) { }

  signin(reqData:IUserSignIn){
    let httpOption = {
      headers : new Headers({
        'Content-type' : 'application/json',
        Authourization:'token'
      })
    }
    return this.httpService.PostService('user/login',reqData,false,httpOption)
  }


registration(reqData:IUserRegistration){

  let httpOption={
    headers:new HttpHeaders({
    'Content-type':'application/json',
    Authourization:'token'
  
    })
  }
  return this.httpService.PostService('user/userSignUp',reqData,false,httpOption)

}

Forgotpassword(reqData:IUserForgotPassword){

  let httpOption={
    headers:new HttpHeaders({
    'Content-type':'application/json',
    Authourization:'token'
  
    })
  }
  return this.httpService.PostService('user/userSignUp',reqData,false,httpOption)

}
resetpassword(reqData:IUserResetPassword){

  let httpOption={
    headers:new HttpHeaders({
    'Content-type':'application/json',
    Authourization:'token'
  
    })
  }
  return this.httpService.PostService('user/reset-password',reqData,false,httpOption)

} 
}