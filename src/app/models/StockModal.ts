export class StockModal{
  
    public stockDate:Date;
    constructor(public companyCode:string, public companyName:string,public stockCode:number,public stockName:string
        ,public stockPrice:number,public stockId:number, stockDate:Date,public stockEndDate:Date,public stockStartDate:Date){
           
    }

    public setStockDate(data:Date){
    this.stockDate=new Date;
    }
    public setCompanyCode(companyCode:string){
        this.companyCode=companyCode;
    }
   
}