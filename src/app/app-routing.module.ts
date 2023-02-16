import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { SignInComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: 'registration', component:RegistrationComponent },
  { path: 'signin',component:SignInComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
