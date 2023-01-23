import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoPageComponent } from './no-page/no-page.component';
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
  path:'about',
  component:ChildComponent,
  children:[
    {
    path:'company',
    component:AboutCompanyComponent
    },
    {
      path:'me',
      component:AboutMeComponent
    }

  ]
},
{
  path:'**',
  component:NoPageComponent
 
},
// {
// path:"admin", loadChildren:()=>import('./admin/admin.module')
// .then(mod=>mod.AdminModule)
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
