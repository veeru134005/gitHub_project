export class CompanyModal{
   
    company_id?: number;
    company_name?: string;
    code?: string;
    company_turnover?: string;
    company_ceo?: string;
    boardOfDirectors?: string;
    stockExchangeNames?: string;
    sectorName?: string;
    description?: string;
    company_website?:string;

    constructor(public companycode:string,public companyname:string,public companyturnover:number,public companyceo:string
        ,public companywebsite:string,public id:number, stockExchangeNames:string){}
}