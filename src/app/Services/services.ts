import {Injectable} from "@angular/core"
import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import { environment } from "src/environments/environment"
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { CompanyModal } from "../models/CompanyModal";

@Injectable({
    providedIn:'root'
})
export class CommonService{

    constructor(private http:HttpClient){

    }
   url:string=environment.apiUrl1;
   
    get(uri:string):Observable<any>{
        return this.http.get(this.url+uri).pipe(catchError((err:HttpErrorResponse)=>{
            return throwError(err);
        }));
    }

    post(uri:string,data:any):Observable<any>{
        return this.http.post(this.url+uri,data).pipe(catchError((err:HttpErrorResponse)=>{
            return throwError(err);
        }));
    }

    delete(uri:string,data:any):Observable<any> {
    return this.http.delete(this.url+uri);
    }

    put(uri: string, data: any):Observable<any> {
        return this.http.put(this.url+uri,data);
      }

}