import { Injectable } from '@angular/core';
import { CompanyModal } from '../models/CompanyModal';
import { CommonService } from './services';

@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {

  deeteCompany(data: any) {
   return this.service.delete('/company',data);
  }

  constructor(private service:CommonService) { }


  getCompanies(){
    return this.service.get('/company');
  }

  companyRegistration(data:any){
    return this.service.post('/company',data);
  }

  updateCompany(data: CompanyModal) {
   return this.service.put('/company/'+data.id,data);
  }
}
