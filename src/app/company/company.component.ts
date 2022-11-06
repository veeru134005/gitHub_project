import { Component, OnInit } from '@angular/core';
import { CompanyModal } from '../models/CompanyModal';
import { CompanyserviceService } from '../Services/companyservice.service';
import { StockService } from '../Services/stock.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private stockSer:StockService,private service:CompanyserviceService) { }

  companyData:CompanyModal[];
  stockExchange=["NSE","BSE"];
  companyModal=new CompanyModal("","",0,"","","Select",0);

  updateCompModal=new CompanyModal("","",0,"","","",0);
    
  ngOnInit(): void {
    this.service.getCompanies().subscribe((res)=>this.companyData=res);
  }

  addCompany(){
    console.log(this.companyModal);
    this.service.companyRegistration(this.companyModal).subscribe(res=>{this.companyData.push(res);
      this.companyModal=new CompanyModal("","",0,"","","NSE",0);
    });
  }
  confirm(data:any,obj:CompanyModal){
    if(confirm("Are you sure to delete "+data)) {
      this.service.deeteCompany(obj).subscribe(res1=>{
        this.service.getCompanies().subscribe((res)=>this.companyData=res)
      });
      this.service.getCompanies().subscribe((res)=>this.companyData=res);
    }
  }
  updateObj(data:CompanyModal){
    this.updateCompModal=data;
  }
  updateCompany(){
    console.log(this.updateCompModal)
       this.service.updateCompany(this.updateCompModal).subscribe(res=>{
        this.service.getCompanies().subscribe((res)=>this.companyData=res)
      })
  }
  
  
}
