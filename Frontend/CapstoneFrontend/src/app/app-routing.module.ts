import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{path:"", component:MainComponent},
{path:"user",component:UserComponent},
{path:"login",component:LoginComponent},
{path:"signup",component:SignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
