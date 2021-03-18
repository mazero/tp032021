import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
      path: '', component: AuthComponent,
      children: [
        { path: '', component: AuthComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
