import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CvcrudComponent } from './template/cvcrud/cvcrud.component';
import { UsercrudComponent } from './template/usercrud/usercrud.component';
import { UpdatecvComponent } from './components/cv/updatecv/updatecv.component';
import { DeletecvComponent } from './components/cv/deletecv/deletecv.component';
import { UpdateuserComponent } from './components/user/updateuser/updateuser.component';
import { NewuserComponent } from './components/user/newuser/newuser.component';
import { DeleteuserComponent } from './components/user/deleteuser/deleteuser.component';
import { NewcvComponent } from './components/cv/newcv/newcv.component';
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard]  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "user", component: DashboardComponent },
  { path: "readcv", component:  CvcrudComponent},
  { path: "readcv/update/:id", component:  UpdatecvComponent},
  { path: "readcv/delete/:id", component:  DeletecvComponent},
  { path: "readcv/newcv", component:  NewcvComponent},
  { path: "readcv/delete/:id", component:  DeletecvComponent},
  { path: "readuser", component:  UsercrudComponent},
  { path: "readuser/newuser", component:  NewuserComponent},
  { path: "readuser/update/:id", component:  UpdateuserComponent},
  { path: "readuser/delete/:id", component:  DeleteuserComponent},
  { path: "dashboard", component: DashboardComponent },
  { path: '**', component: PagenotfoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
