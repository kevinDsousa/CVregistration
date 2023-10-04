import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http'

import { HomeComponent } from './views/home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NewcvComponent } from './components/cv/newcv/newcv.component';
import { ReadcvComponent } from './components/cv/readcv/readcv.component';
import { UpdatecvComponent } from './components/cv/updatecv/updatecv.component';
import { DeletecvComponent } from './components/cv/deletecv/deletecv.component';
import { NewuserComponent } from './components/user/newuser/newuser.component';
import { UpdateuserComponent } from './components/user/updateuser/updateuser.component';
import { ReaduserComponent } from './components/user/readuser/readuser.component';
import { DeleteuserComponent } from './components/user/deleteuser/deleteuser.component';
import { MatNativeDateModule } from '@angular/material/core';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component';
import { UserComponent } from './views/user/user.component';
import { UsercrudComponent } from './template/usercrud/usercrud.component';
import { CvcrudComponent } from './template/cvcrud/cvcrud.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NewcvComponent,
    ReadcvComponent,
    UpdatecvComponent,
    DeletecvComponent,
    NewuserComponent,
    UpdateuserComponent,
    ReaduserComponent,
    DeleteuserComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    UserComponent,
    UsercrudComponent,
    CvcrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    NgChartsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    CarouselModule.forRoot(),
  ],
  providers: [{ provide: NgChartsConfiguration, useValue: { generateColors: false }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
