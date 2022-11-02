import { Component, OnInit } from '@angular/core';
import { CompanyModal } from '../models/CompanyModal';
import { StockModal } from '../models/StockModal';
import { CompanyserviceService } from '../Services/companyservice.service';
import { StockService } from '../Services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private stockSer:StockService,private companyservice:CompanyserviceService) { }

  stockData=[];
  listOfCompanies=[];

  addStockModal=new StockModal("","",0,"",0,Math.floor( Math.random()),new Date,'');

  updateStockModal=new StockModal("","",0,"",0,Math.floor( Math.random()),new Date,'');

  ngOnInit(): void {
    this.stockSer.getStock().subscribe(res=>this.stockData=res);
    this.companyservice.getCompanies().subscribe((res)=>{
      this.listOfCompanies=res
      console.log(this.listOfCompanies);
    });
      
    
  }
  addStock(data:CompanyModal){
    this.addStockModal.setValidDate(new Date);
    this.addStockModal.setCompanyCode(data.companyCode);
    this.addStockModal.setCompanyName(data.companyName);
    console.log(this.addStock);
    this.stockSer.stockRegistration(this.addStockModal).subscribe(res=>this.stockData.push(res));
  }

  refreshStockObj(data:StockModal){
    this.updateStockModal=data;
  }
  updateStock(){
this.stockSer.updatestock(this.updateStockModal).subscribe(res=>this.stockSer.getStock().subscribe(res=>this.stockData=res));
  }
  confirm(data:any,obj:StockModal){
    if(confirm("Are you sure to delete "+data)) {
      this.stockSer.deleteStock(data).subscribe(res=>{
        this.stockSer.getStock().subscribe((res)=>this.stockData=res)
      });
    }
  }


}
