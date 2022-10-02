import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
import { Company } from '../models/Company';
import { searchResult } from '../models/Search';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  companySearchForm=new FormControl('');
  addCompanyForm=new FormControl('');

  company:Company={
  company_id: 4978,
  company_name: "silver",
  company_website:"yahoo",
  company_turnover:"4387",
  company_ceo:"math"
  }

//   company_det=[{"company_id": "4978",
//   "company_name": "silver",
//   "company_website":"yahoo",
//   "company_turnover":"4387",
//   "company_ceo":"math"
// },{"company_id": "4578",
//   "company_name": "gold",
//   "company_website":"google",
//   "company_turnover":"5698",
//   "company_ceo":"mathow"
// }]

compSearchResult: searchResult={
  company_id: 1236,
  company_name: "IRON",
  company_website:"google",
  company_turnover:2000,
  company_ceo:"hario"
}
  // compSearchResult=[{
  //   "company_id": "1236",
  //   "company_name": "IRON",
  //   "company_website":"google",
  //   "company_turnover":"2000",
  //   "company_ceo":"hario"
  // }];
  companyData= [this.company];
  searchResult=this.compSearchResult;
  closeResult = '';
  modalcontent:any | undefined;
  viewDetails(data:any,d:any){

  }
  searchCompany(){

  }

  openModal(data:any){

  }

  addCompany(){

  }

}
