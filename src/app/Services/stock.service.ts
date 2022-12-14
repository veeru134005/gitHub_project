import { Injectable } from '@angular/core';
import {CommonService} from './services'
import {StockModal} from '../models/StockModal'

@Injectable({
  providedIn: 'root'
})
export class StockService {
  constructor(private service:CommonService) { }
 
  deleteStock(data: StockModal) {
    return this.service.delete('stock/delete/'+data.stockId);
   }
 
   deleteByComapnayCode(companyCode: any) {
    return this.service.delete('stock/deleteByCompanyCode/'+companyCode);
   }

   getStock(){
     return this.service.get('stock/getAll');
   }
 
   stockRegistration(data:any){
     return this.service.post('stock/stockRegister',data);
   }
 
   updatestock(data: StockModal) {
    return this.service.put('stock/updateStock',data);
   }

   serachByStockData(startDate:String,endDate:String){
    return this.service.get('stock/'+startDate+'/'+endDate);
   }

   serachByCompanyCode(companyCode:any){
    return this.service.get('stock/getStockBycompanyCode/'+companyCode);
   }

}
