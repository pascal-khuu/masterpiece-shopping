import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private urlApi: string;
  public messager = new Subject<boolean>();
  constructor(private http:HttpClient) {
    this.urlApi='http://localhost:8080';
   }

  public signInUser(username: string, password: string) {
    const body = {
      "username": username,
      "password": password,
      
    };
    
    return this.http.post(`${this.urlApi}/users/sign-in`, body);
  }

  public signUpUser(lastName: string, firstName:string, username: string, password: string) {
    const body = {
      "lastName": lastName,
      "firstName":firstName,
      "username": username,
      "password": password,

    };

    return this.http.post(`${this.urlApi}/users/sign-up`, body);
  }
}
