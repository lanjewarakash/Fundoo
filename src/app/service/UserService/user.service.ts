import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { IUserSignIn } from '../model/defineData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  signin(reqData:IUserSignIn){
    let httpOption = {
      headers : new Headers({
        'Content-type' : 'application/json',
        Authourization:'token'
      })
    }
    return this.httpService.PostService('user/login',reqData,false,httpOption)
  }
}
