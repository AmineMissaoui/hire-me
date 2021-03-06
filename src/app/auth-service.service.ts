import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor( private http: HttpClient) { }
  login(data): Observable<any>{
    return this.http.post('', data);
  }
}
