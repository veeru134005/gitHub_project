import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupformComponent } from './signupform/signupform.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'dashboard',component:DashboardComponent},
{path:'signup',component:SignupformComponent},
{path:'addstock',component:StockComponent},
{path:'create-company',component:CompanyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
