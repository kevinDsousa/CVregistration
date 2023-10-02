import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http'

import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component'
import { HomeComponent } from './views/home/home.component';
import { RegistercvComponent } from './template/registercv/registercv.component';

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

import { FormsModule } from '@angular/forms';
import { ReadcvComponent } from './components/curriculo/readcv/readcv.component';
import { NewcvComponent } from './components/curriculo/newcv/newcv.component';
import { UpdatecvComponent } from './components/curriculo/updatecv/updatecv.component';
import { DeletecvComponent } from './components/curriculo/deletecv/deletecv.component';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { BannerComponent } from './components/banner/banner.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { GridComponent } from './components/grid/grid.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RegistercvComponent,
    NewcvComponent,
    ReadcvComponent,
    UpdatecvComponent,
    DeletecvComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    BannerComponent,
    GridComponent,
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
    CarouselModule.forRoot(),
  ],
  providers: [{ provide: NgChartsConfiguration, useValue: { generateColors: false }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
