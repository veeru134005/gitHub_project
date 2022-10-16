export class StockModal{

    public validDate:Date;
    constructor(public companyCode:string,public companyName:string,public stockCode:number,public stockName:string
        ,public stockPrice:number,public id:number, validDate:Date){

    }

    public setValidDate(data:Date){
    this.validDate=new Date;
    }
}