import { Component, OnInit } from '@angular/core';
import { CompanyModal } from '../models/CompanyModal';
import { CompanyserviceService } from '../Services/companyservice.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private service:CompanyserviceService) { }

  companyData:CompanyModal[];
  stockExchange=["NSE","BSE"];
  companyModal=new CompanyModal("","",0,"","",Math.floor( Math.random()),"Select");

  updateCompModal=new CompanyModal("","",0,"","",Math.floor( Math.random()),"");
    
  ngOnInit(): void {
    this.service.getCompanies().subscribe((res)=>this.companyData=res);
  }

  addCompany(){
    this.service.companyRegistration(this.companyModal).subscribe(res=>{this.companyData.push(res);
      this.companyModal=new CompanyModal("","",0,"","",Math.floor( Math.random()),"NSE");
    });
  }
  confirm(data:any,obj:CompanyModal){
    if(confirm("Are you sure to delete "+data)) {
      this.service.deeteCompany(data).subscribe(res=>{
        this.service.getCompanies().subscribe((res)=>this.companyData=res)
      });
    }
  }
  updateObj(data:CompanyModal){
    this.updateCompModal=data;
  }
  updateCompany(){
       this.service.updateCompany(this.updateCompModal).subscribe(res=>{
        this.service.getCompanies().subscribe((res)=>this.companyData=res)
      })
  }
  
  
}
