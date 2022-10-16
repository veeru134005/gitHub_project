import { Injectable } from '@angular/core';
import {CommonService} from './services'
import {StockModal} from '../models/StockModal'

@Injectable({
  providedIn: 'root'
})
export class StockService {
  constructor(private service:CommonService) { }
 
  deleteStock(data: any) {
    return this.service.delete('/stock',data);
   }
 
   getStock(){
     return this.service.get('/stock');
   }
 
   stockRegistration(data:any){
     return this.service.post('/stock',data);
   }
 
   updatestock(data: StockModal) {
    return this.service.put('/stock/'+data.id,data);
   }

}
