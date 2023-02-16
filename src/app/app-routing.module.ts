import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: 'registration', component:RegistrationComponent },
  {path: 'signin', component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
