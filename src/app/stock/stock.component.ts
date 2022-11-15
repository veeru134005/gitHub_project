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

  stockData:Array<StockModal>=[];
  listOfCompanies:Array<CompanyModal>=[];
  serachdata='dates';
  addStockModal=new StockModal("Select","",0,"",0,Math.floor( Math.random()),new Date,new Date,new Date);

  updateStockModal=new StockModal("","",0,"",0,Math.floor( Math.random()),new Date,new Date,new Date);
  isLoaderRequired=true;
  ngOnInit(): void {

    this.companyservice.getCompanies().subscribe((res)=>{
      this.listOfCompanies=res;
      this.stockSer.getStock().subscribe(res=>{this.stockData=res;
        this.refreshUpdateStn();
      });
    this.isLoaderRequired=false;
    });
    
  }

  addStock(data:StockModal){
    this.isLoaderRequired=true;
    this.addStockModal.setStockDate(new Date);
    this.addStockModal.setCompanyCode(data.companyCode);
    this.stockSer.stockRegistration(this.addStockModal).subscribe(res=>{this.stockData.push(res)
      this.refreshUpdateStn();
      this.addStockModal=new StockModal("Select","",0,"",0,Math.floor( Math.random()),new Date,new Date,new Date);

      this.isLoaderRequired=false;
    });
  }

  refreshStockObj(data:StockModal){
    this.updateStockModal=data;
  }
  updateStock(){
  this.stockSer.updatestock(this.updateStockModal).subscribe(res=>this.stockSer.getStock().subscribe(res=>{this.stockData=res;
  this.refreshUpdateStn();
}));
  }
  deleteStock(data:any,obj:StockModal){
    if(confirm("Are you sure want to delete stock "+data)) {
      this.isLoaderRequired=true;
         this.stockSer.deleteStock(obj).subscribe(res=>{
        this.stockSer.getStock().subscribe((res)=>{this.stockData=res
          this.refreshUpdateStn();
          this.isLoaderRequired=false;
        });
       
      });
    }
  }

  refreshUpdateStn(){
    this.stockData.map(st=>st.companyName=(this.listOfCompanies.filter(l=>l.companyCode==st.companyCode).map(m=>m.companyName)[0]))
    }

    searchByDates(startDate:string,endDate:string){
      this.isLoaderRequired=true;
      
      this.stockSer.serachByStockData(startDate,endDate).subscribe(res=>{
        this.stockData=res;
        this.refreshUpdateStn();
        this.isLoaderRequired=false;
      });
      
    }

}
