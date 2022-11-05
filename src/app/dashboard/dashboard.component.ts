import { Component, OnInit } from '@angular/core';
import { CompanyModal } from '../models/CompanyModal';
import { StockModal } from '../models/StockModal';
import { CompanyserviceService } from '../Services/companyservice.service';
import { DashBoardService } from '../Services/dashBoardService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashService:DashBoardService,private companyservice:CompanyserviceService) { }

  statistics=[];
  recentStocks:Array<StockModal>=[];
  listOfCompanies:Array<CompanyModal>=[];
  ngOnInit(): void {
    this.dashService.getCompanyStatistics().subscribe((res:any)=>{
      this.statistics=res;
      
    },err=>{
      console.log(err.message);
    });

    this.dashService.getRecentStockDetails().subscribe(res=>{this.recentStocks=res;
      this.companyservice.getCompanies().subscribe((res)=>{
        this.listOfCompanies=res;
        this.refreshUpdateStn();
        
        });
    })
  }
  refreshUpdateStn(){
    this.recentStocks.map(st=>st.companyName=(this.listOfCompanies.filter(l=>l.companyCode==st.companyCode).map(m=>m.companyName)[0]))
  }
}
