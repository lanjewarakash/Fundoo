import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthguardService } from './services/authguardService/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private authguardService : AuthguardService,private router :Router){}
  canActivate():boolean {
    if(!this.authguardService.gettoken()){
      this.router.navigateByUrl("/signin");
    }
    return this.authguardService.gettoken()
  }

  }
  

