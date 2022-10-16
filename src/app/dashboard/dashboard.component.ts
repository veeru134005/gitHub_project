import { Component, OnInit } from '@angular/core';
import { DashBoardService } from '../Services/dashBoardService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashService:DashBoardService) { }

  statistics=[];
  recentStocks= [];
 
  ngOnInit(): void {
    this.dashService.getCompanyStatistics().subscribe((res:any)=>{
      this.statistics=res;
      console.log(JSON.stringify(res));
    },err=>{
      console.log(err.message);
    });

    this.dashService.getRecentStockDetails().subscribe(res=>this.recentStocks=res)
  }
}
