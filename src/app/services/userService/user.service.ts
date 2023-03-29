  import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import {
  IUserForgotPassword,
  IUserLogin,
  IUserRegistration,
  IUserResetPassword,
} from '../model/definedData';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  signin(reqData: IUserLogin) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.PostService(
      'user/login',
      reqData,  
      false,
      httpOption
    );
  }

  registration(reqData: IUserRegistration) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.PostService(
      'user/userSignUp',
      reqData,
      false,
      httpOption
    );
  }

  resetpassword(reqData: IUserResetPassword) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.PostService(
      'user/reset-password',
      reqData,
      false,
      httpOption
    );
  }
  forgotpassword(reqData: IUserForgotPassword) {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        authorization: this.token,
      }),
    };
    return this.httpService.PostService(
      'user/reset',
      reqData,
      false,
      httpOption
    );
  }
}
