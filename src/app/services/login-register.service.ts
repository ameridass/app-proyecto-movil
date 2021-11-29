import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor
  (
    private http: HttpClient,
  ) { }

  endPoint = 'http://localhost:8081/'
  httpOptions ={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  createUser(data: any){
    return this.http.post<any>(this.endPoint+`registrar`, JSON.stringify(data), this.httpOptions)
  }

  getUserValid(data: any){
    return this.http.post<any>(this.endPoint+`login`, JSON.stringify(data), this.httpOptions)
  }
}
