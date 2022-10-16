import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
import { CompanyModal } from '../models/CompanyModal';
import { searchResult } from '../models/Search';
import { CompanyserviceService } from '../Services/companyservice.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private service:CompanyserviceService) { }

  companyData=[]

  addCompany=CompanyModal;
    
  ngOnInit(): void {
    this.service.getCompanies().subscribe((res)=>this.companyData=res);
  }
  
}
