import {Injectable} from "@angular/core"
import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import { environment } from "src/environments/environment"
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn:'root'
})
export class CommonService{

    constructor(private http:HttpClient){

    }
   url:string=environment.apiUrl;
   
    get(uri:string):Observable<any>{
        return this.http.get(this.url+uri).pipe(catchError((err:HttpErrorResponse)=>{
            return throwError(err);
        }));
    }
}