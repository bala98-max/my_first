import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '',redirectTo:'signin',pathMatch:'full' },
  { path : 'signin', component : SigninComponent},
  { path: 'signup' ,component: SignupComponent},
  { path: 'users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
