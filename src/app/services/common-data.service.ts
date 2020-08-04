import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';
import { Common, EmailObj } from '../../models/common';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
  emailApi: string;
  functionKey: string;
  constructor(private http: HttpClient) { }
 
  getServices(): Observable<Common> {
    return this.http.get("../database/data.json").pipe(map((data: any) => {      
      const serializeData = new Common().deserialize(data);
      this.emailApi = serializeData.emailApi;
      this.functionKey = serializeData.functionKey;
      return serializeData;
    }));
  }

  sendEmail(emailObj: EmailObj): Observable<boolean> {    
    const headers = new HttpHeaders({ 'x-functions-key': this.functionKey });
    const body = { fromEmail: emailObj.fromEmail, toEmail: emailObj.toEmail, description: emailObj.description, name: emailObj.name, subject: emailObj.subject, mobile: emailObj.mobile }
    return this.http.post<any>(this.emailApi, body, { headers: headers }).pipe(catchError((err: HttpErrorResponse) => {      
      return of(false);
    }));
  }
}
