import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { GetAllNoteComponent } from './components/get-all-note/get-all-note.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SignInComponent } from './components/signin/signin.component';
import { TrashNoteComponent } from './components/trash-note/trash-note.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'createnote', component: CreateNoteComponent },
  {path: 'home',component: DashboardComponent,
      children:
      [{ path: 'notes', component: GetAllNoteComponent },
      { path: 'display', component: DisplayNoteComponent },
      { path: 'trash', component: TrashNoteComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
