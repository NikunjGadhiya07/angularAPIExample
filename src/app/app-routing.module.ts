import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './modules/users/users.component';
import { UserDetailsComponent } from './modules/user-details/user-details.component';


const routes: Routes = [{
  path: '',
  component: UsersComponent
},{
  path: 'detail/:name', 
  component: UserDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
