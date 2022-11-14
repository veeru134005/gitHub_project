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
  errorMsgSer='';
  stockExchange=["NSE","BSE"];
  companyModal=new CompanyModal("","",0,"","","Select",0);

  updateCompModal=new CompanyModal("","",0,"","","",0);
  isLoaderRequired=true;
    
  ngOnInit(): void {

    this.service.getCompanies().subscribe((res)=>{this.companyData=res;
      this.isLoaderRequired=false
    });
  }

  addCompany(){
    this.isLoaderRequired=true;
    this.service.companyRegistration(this.companyModal).subscribe(res=>{this.companyData.push(res);
      this.companyModal=new CompanyModal("","",0,"","","",0);
      this.isLoaderRequired=false
    });
  }
  confirm(data:any,obj:CompanyModal){
    if(confirm("Are you sure to delete "+data)) {
      this.isLoaderRequired=true;
      this.service.deeteCompany(obj).subscribe(res1=>{
        this.service.getCompanies().subscribe((res)=>this.companyData=res)
      });
      this.service.getCompanies().subscribe((res)=>{this.companyData=res;
        this.isLoaderRequired=false;
      });
    }
  }
  updateObj(data:CompanyModal){
    this.updateCompModal=data;
  }
  updateCompany(){
    this.isLoaderRequired=true;
       this.service.updateCompany(this.updateCompModal).subscribe(res=>{
        this.service.getCompanies().subscribe((res)=>{
          this.companyData=res;
          this.isLoaderRequired=false;
        })
      })
  }
  
  searchData(value:any){
    console.log(value);
    if(value==null || value=='' || value==undefined){
this.errorMsgSer='Please enter companyName Or code';
    }else{
    this.containsOnlyNumbers(value) ? this.service.searchByCompNameCode(value,'def').subscribe(res=>this.companyData=res): this.service.searchByCompNameCode(0,value).subscribe(res=>this.companyData=res);
    this.errorMsgSer='';
  }
}

   containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }
  
}
