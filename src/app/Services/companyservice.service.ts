import { Injectable } from '@angular/core';
import { CompanyModal } from '../models/CompanyModal';
import { CommonService } from './services';

@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {

  deeteCompany(data: CompanyModal) {
   return this.service.delete('company/'+parseInt(data.companyCode));
  }

  constructor(private service:CommonService) { }


  getCompanies(){
    return this.service.get('company/companies');
  }

  companyRegistration(data:any){
    return this.service.post('company/addcompany',data);
  }

  updateCompany(data: CompanyModal) {
   return this.service.put('company/update',data);
  }

  searchByCompNameCode(companyCode:number,companyName:string){
    return this.service.get('company'+'/'+companyCode+'/'+companyName);
  }
}
