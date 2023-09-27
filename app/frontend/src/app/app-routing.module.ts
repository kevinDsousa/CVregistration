import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RegistercvComponent } from './views/registercv/registercv.component';
import { NewcvComponent } from './views/newcv/newcv.component';
import { NewuserComponent } from './views/newuser/newuser.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegistercvComponent},
  { path: "register/newcv", component: NewcvComponent},
  { path: "register/newuser", component: NewuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
