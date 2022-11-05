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
 
   getStock(){
     return this.service.get('stock/getAll');
   }
 
   stockRegistration(data:any){
     return this.service.post('stock/stockRegister',data);
   }
 
   updatestock(data: StockModal) {
    return this.service.put('stock/updateStock',data);
   }

}
