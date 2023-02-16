import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SignInComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'resetpassword' , component: ResetpasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
