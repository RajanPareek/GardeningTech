import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Common } from '../models/common';
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
}
