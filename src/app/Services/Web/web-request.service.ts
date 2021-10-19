import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  private BASE_URL!: string;
  constructor(private http:HttpClient) { 
    this.BASE_URL="http://localhost:8000";
  }

  get(uri:string){
    return this.http.get(`${this.BASE_URL}/${uri}`);
  }

  post(uri:string,payload:Object){
    return this.http.post(`${this.BASE_URL}/${uri}`,payload)
  }
}
