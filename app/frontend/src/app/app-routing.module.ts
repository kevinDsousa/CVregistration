import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RegistercvComponent } from './views/registercv/registercv.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegistercvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
