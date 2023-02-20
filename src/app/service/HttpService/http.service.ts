import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient : HttpClient) { }

  BaseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/';

  PostService(url:string, reqData:any , token:boolean,httpOption:any){
    return this.httpClient.post(this.BaseUrl + url, reqData, token && httpOption);

  }

  GetService(url:string, reqData:any , token:boolean,httpOption:any){
    return this.httpClient.post(this.BaseUrl + url, reqData, token && httpOption);

  }

  PutService(url:string, reqData:any , token:boolean,httpOption:any){
    return this.httpClient.post(this.BaseUrl + url, reqData, token && httpOption);

  }

  DeleteService(url:string, reqData:any , token:boolean,httpOption:any){
    return this.httpClient.post(this.BaseUrl + url, reqData, token && httpOption);

  }
}

