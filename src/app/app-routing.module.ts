import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
{
  path:'',
  redirectTo:'home',pathMatch:"full"
},
  {
    path:'login',
    component:LoginComponent
  },
  
  {
    path:'home',
    component:HomeComponent
  },
  {
  path:'user-list',
  component:UserListComponent
  },

  {
    path:'header',
    component:HeaderComponent
  },
  {
  path:'child',
  component:ChildComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
