import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: any;

  constructor(private http: HttpClient) { }
  adduser(username, password, mailid, phno) {
    const obj = {
    Username : username ,
    Password: password ,
    Mailid: mailid,
    Phno: phno
    };
    this.http.post(`${this.url}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  getBusinesses() {
    return this
           .http
           .get(`${this.url}`);
  }
}
