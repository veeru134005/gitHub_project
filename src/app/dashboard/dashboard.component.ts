import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  status={
    "min":"",
    "avg":"",
    "max":""
  }
  ngOnInit(): void {
  }
  comp={
    "id":"",
    "company_id":"",
    "company_name":""
  }
  stock={
    "id":"",
    "stock_code":"",
    "stock_name":""
  }
  companyList=[this.comp];
  stockList=[this.stock];
 
  stock_det=[{
    "id":"1",
    "companyCode": "CNGA8745",
    "companyName":"EFRON",
    "stockCode":"1236",
    "stockName":"IRON",
    "stockPrice":"12367",
    "validDate":"12/30/2025"
  },{
    "id":"1234",
    "companyCode": "CNGA7298",
    "companyName":"IRONY",
    "stockCode":"764",
    "stockName":"TEA",
    "stockPrice":"687",
    "validDate":"12/30/2025"
  },{
    "id":"1239",
    "companyCode": "CNG87292",
    "companyName":"IRONI",
    "stockCode":"7623",
    "stockName":"GOLD",
    "stockPrice":"689",
    "validDate":"12/30/2027"
  }]



  stockData= this.stock_det;
  stockSearchResult= [this.stock_det];
  closeResult = '';
  error: any;
  modalcontent:any | undefined;

}
