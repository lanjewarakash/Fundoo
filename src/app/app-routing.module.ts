import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { ArchiveComponent } from './components/archive/archive.component';
import { BinComponent } from './components/bin/bin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetAllNoteComponent } from './components/get-all-note/get-all-note.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'registration', component:RegistrationComponent },
  { path: 'signin',component:SignInComponent },
  {path: 'forgotpassword',component:ForgotpasswordComponent},
  { path: 'resetpassword',component:ResetpasswordComponent},

  {path: 'home', component:DashboardComponent,canActivate:[AuthguardGuard],

  children:[{path: 'notes',component:GetAllNoteComponent},
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
{path :'bin',component:BinComponent},
{path :'archive',component:ArchiveComponent},
{path :'reminder',component:ReminderComponent}]

  }]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
