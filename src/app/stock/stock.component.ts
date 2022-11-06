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

  addStockModal=new StockModal("","",0,"",0,Math.floor( Math.random()),new Date,new Date,new Date);

  updateStockModal=new StockModal("","",0,"",0,Math.floor( Math.random()),new Date,new Date,new Date);

  ngOnInit(): void {

    this.companyservice.getCompanies().subscribe((res)=>{
      this.listOfCompanies=res;
      this.stockSer.getStock().subscribe(res=>{this.stockData=res;
        this.refreshUpdateStn();
      });});
  }

  addStock(data:StockModal){
    this.addStockModal.setStockDate(new Date);
    this.addStockModal.setCompanyCode(data.companyCode);
    this.stockSer.stockRegistration(this.addStockModal).subscribe(res=>{this.stockData.push(res)
      this.refreshUpdateStn();
    });
  }

  refreshStockObj(data:StockModal){
    this.updateStockModal=data;
  }
  updateStock(){
    console.log("haiii")
this.stockSer.updatestock(this.updateStockModal).subscribe(res=>this.stockSer.getStock().subscribe(res=>{this.stockData=res;
  this.refreshUpdateStn();
}));
  }
  deleteStock(data:any,obj:StockModal){
    if(confirm("Are you sure want to delete stock "+data)) {
         this.stockSer.deleteStock(obj).subscribe(res=>{
        this.stockSer.getStock().subscribe((res)=>{this.stockData=res
          this.refreshUpdateStn();
        });
       
      });
    }
  }

  refreshUpdateStn(){
    this.stockData.map(st=>st.companyName=(this.listOfCompanies.filter(l=>l.companyCode==st.companyCode).map(m=>m.companyName)[0]))
  console.log(this.stockData);
  }


}
