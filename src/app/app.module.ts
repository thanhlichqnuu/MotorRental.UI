import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/Component/header/header.component';
import { FooterComponent } from './Core/Component/footer/footer.component';
import { MotorbikeListComponent } from './Feature/Motobike/motobike-list/motorbike-list.component';
import { FormsModule } from '@angular/forms';
import { MotorbikeDetailComponent } from './Feature/Motobike/motorbike-detail/motorbike-detail.component';
import { BreadcrumbComponent } from './Core/breadcrumb/breadcrumb.component';
import { LoginComponent } from './Feature/auth/login/login.component';
import { MainComponent } from './Core/Component/main/main.component';
import { AuthInterceptor } from './Core/interceptors/auth.interceptor';
import { AppointmentsListComponent } from './Feature/Appointments/appointments-list/appointments-list.component';
import { DashboardsComponent } from './Core/Component/dashboards/dashboards.component';
import { HomepageComponent } from './Core/homepage/homepage.component';
import { NavbarComponent } from './Core/homepage/navbar/navbar.component';
import { FooterHomepageComponent } from './Core/homepage/footer-homepage/footer-homepage.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HomePageListComponent } from './Feature/Home/home-page-list/home-page-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { MotorbikeHomeDetailComponent } from './Feature/Home/motorbike-detail/motorbike-detail.component';
import { RegisterComponent } from './Feature/auth/register/register.component';
import { AddMotorbikeComponent } from './Feature/Motobike/add-motorbike/add-motorbike.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmDeleteDialogComponent } from './Feature/Motobike/confirm-delete-dialog/confirm-delete-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardsComponent,
    MotorbikeListComponent,
    BreadcrumbComponent,
    MotorbikeDetailComponent,
    LoginComponent,
    MainComponent,
    AppointmentsListComponent,
    HomepageComponent,
    NavbarComponent,
    FooterHomepageComponent,
    HomePageListComponent,
    MotorbikeHomeDetailComponent,
    RegisterComponent,
    AddMotorbikeComponent,
    ConfirmDeleteDialogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,NgxPaginationModule,CommonModule, AngularEditorModule, BrowserAnimationsModule, ToastrModule.forRoot(), MatDialogModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
