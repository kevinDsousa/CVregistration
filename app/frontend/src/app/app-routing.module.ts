import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RegistercvComponent } from './template/registercv/registercv.component';
import { NewcvComponent } from './components/curriculo/newcv/newcv.component';
import { UpdatecvComponent } from './components/curriculo/updatecv/updatecv.component';
import { DeletecvComponent } from './components/curriculo/deletecv/deletecv.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "registercv", component: RegistercvComponent},
  { path: "registercv/newcv", component: NewcvComponent},
  { path: "registercv/updatecv/:id", component: UpdatecvComponent},
  { path: "registercv/deletecv/:id", component: DeletecvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
