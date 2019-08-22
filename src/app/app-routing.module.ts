import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { OnBoardingComponent } from './employee-management/on-boarding/on-boarding.component';
import { MyDatePickerModule } from 'mydatepicker';
import { Step2FormComponent } from './employee-management/step2-form/step2-form.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path : 'employee-management',
    component: EmployeeManagementComponent
  },
  {
     path: '',
     redirectTo: 'dashboard',
     pathMatch: 'full'
  },
  {
    path: 'top-nav',
    component: TopNavComponent
  },
  {
    path: 'on-boarding',
    component: OnBoardingComponent
  },
  {
    path: 'step2Form',
    component: Step2FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
