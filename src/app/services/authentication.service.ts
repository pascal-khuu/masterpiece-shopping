import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private urlApi: string;
  constructor(private http:HttpClient) {
    this.urlApi='http://localhost:8080';
   }
}
