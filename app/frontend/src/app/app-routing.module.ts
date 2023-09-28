import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RegistercvComponent } from './views/registercv/registercv.component';
import { NewcvComponent } from './components/curriculo/newcv/newcv.component';
import { NewuserComponent } from './components/users/newuser/newuser.component';
import { UpdatecvComponent } from './components/curriculo/updatecv/updatecv.component';
import { DeletecvComponent } from './components/curriculo/deletecv/deletecv.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegistercvComponent},
  { path: "register/newcv", component: NewcvComponent},
  { path: "register/updatecv/:id", component: UpdatecvComponent},
  { path: "register/deletecv/:id", component: DeletecvComponent},
  { path: "register/newuser", component: NewuserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
