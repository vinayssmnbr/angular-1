import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent} from './admin-login/admin-login.component'
import { AdminListComponent } from './admin-list/admin-list.component';

const routes: Routes = [
  {path:'admin-login', component:AdminLoginComponent},
  {path: 'admin-list', component: AdminListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
