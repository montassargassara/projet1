import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReadComponent } from './crud/read/read.component';
import { TeamReadComponent } from './crud/team-read/team-read.component';


const routes: Routes = [
 { path: '',
  component: DefaultComponent,
  children:[
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path:'home',
      component: PostsComponent
    },
    {
      path:'list',
      component: TeamReadComponent,
    }
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', redirectTo: 'login', pathMatch: 'full' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
