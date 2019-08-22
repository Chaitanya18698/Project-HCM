import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-highcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { MyDatePickerModule } from 'mydatepicker';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { OnBoardingComponent } from './employee-management/on-boarding/on-boarding.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Step2FormComponent } from './employee-management/step2-form/step2-form.component';
declare var require: any
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    FooterComponent,
    SidebarRightComponent,
    EmployeeManagementComponent,
    TopNavComponent,
    OnBoardingComponent,
    Step2FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyDatePickerModule,
    ReactiveFormsModule,
    ChartModule.forRoot(require('highcharts'))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
