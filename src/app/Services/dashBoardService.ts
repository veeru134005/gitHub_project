import {Injectable} from "@angular/core"
import {HttpClient,HttpErrorResponse} from "@angular/common/http"
import { Observable, throwError } from "rxjs";
import { CommonService } from "./services";

@Injectable({
    providedIn:'root'
})
export class DashBoardService{
    constructor(private _http:HttpClient,private service:CommonService) { }


     getCompanyStatistics():Observable<any>{
        return this.service.get("/getStats");
     }

     getRecentStockDetails():Observable<any>{
        return this.service.get("/stock");
     }

}