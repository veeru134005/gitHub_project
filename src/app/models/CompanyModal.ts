export class CompanyModal{
   
    company_id?: number;
    companyName?: string;
    code?: string;
    company_turnover?: string;
    company_ceo?: string;
    boardOfDirectors?: string;
    companyStockExchange?: string;
    sectorName?: string;
    description?: string;
    company_website?:string;

    constructor(public companyCode:string, companyName:string,public companyTurnover:number,public companyCeo:string
        ,public companyWebsite:string, companyStockExchange:string){}
}