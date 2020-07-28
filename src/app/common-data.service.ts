import { Injectable, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';
import { Common, EmailObj } from '../models/common';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
  constructor(private http: HttpClient) { }
 
  getServices(): Observable<Common> {
    return this.http.get("../database/data.json").pipe(map((data: any) => {      
      return new Common().deserialize(data);     
    }));
  }

  sendEmail(emailObj: EmailObj): Observable<boolean> {    
    const body = { emailFrom: emailObj.email, description: emailObj.description, name: emailObj.name, subject: emailObj.subject, mobile: emailObj.mobile }
    const sss = this.http.post<any>('http://localhost:7071/api/EmailUs', body).subscribe(() => {
        return true;
    });
    return of(false);
  }
}
