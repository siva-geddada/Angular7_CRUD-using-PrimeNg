import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usermodal  } from '../model/usermodal';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:3000/employees/';
  selectedEmployee: Usermodal;

  constructor(private http: HttpClient) { }

 getUsers() {
    return this.http.get(this.userUrl + 'users' );
  }

  deleteUser(_id: string) {
    return this.http.delete(this.userUrl + `/${_id}`);
  }

   createUser(data) {
    return this.http.post(this.userUrl + 'addItem' , data);
  }
  putEmployee(emp: Usermodal) {
    return this.http.put(this.userUrl + `/${emp._id}`, emp);
  }
}
