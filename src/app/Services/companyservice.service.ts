import { Injectable } from '@angular/core';
import { CommonService } from './services';

@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {

  constructor(private service:CommonService) { }


  getCompanies(){
    return this.service.get('/company');
  }

}
