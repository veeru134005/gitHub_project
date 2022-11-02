export class StockModal{

    public validDate:Date;
    constructor(public companyCode:string,public companyName:string,public stockCode:number,public stockName:string
        ,public stockPrice:number,public id:number, validDate:Date,public companycode:string){

    }

    public setValidDate(data:Date){
    this.validDate=new Date;
    }
    public setCompanyCode(companyCode:string){
        this.companyCode=companyCode;
    }
    public setCompanyName(companyName:string){
    this.companyName=companyName;
}
}