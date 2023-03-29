import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateNote, IUserForgotPassword, IUserLogin, IUserRegistration, IUserResetPassword } from '../model/definedData';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  BaseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/';

  PostService(url: string, reqData: IUserLogin | IUserRegistration | IUserResetPassword | IUserForgotPassword | CreateNote, token: boolean=false, httpOption: any) {
    return this.httpClient.post(this.BaseUrl + url,reqData,token && httpOption
    );
  }

  GetService(url: string,  token: boolean=true, httpOption: any) {
    return this.httpClient.get (this.BaseUrl + url, token && httpOption );
  }

  PutService(url: string, reqData: any, token: boolean, httpOption: any) {
    return this.httpClient.put ( this.BaseUrl + url,reqData);

  }

  DeleteService(url: string, reqData: any, token: boolean, httpOption: any) {
    return this.httpClient.delete (this.BaseUrl + url,reqData );

  }
}
