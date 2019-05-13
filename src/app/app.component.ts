import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/components/common/api';
import { UserService } from '../app/services/user.service';
import { Usermodal } from './model/usermodal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular7-CRUD';
  display = false;
  userform: any;
  users: Usermodal[];
  constructor(private fb: FormBuilder, private messageService: MessageService, private userservices: UserService) {
  }
  ngOnInit() {


    this.userform = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      mailid: new FormControl('', [Validators.required, Validators.email]),
      phono: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[6-9]\\d{9}')])),
    });
    this.userservices
      .getBusinesses()
      .subscribe((data: Usermodal[]) => {
        this.users = data;
      });
  }
  showDialog() {
    this.display = true;
  }
  closedialog() {
    this.display = false;
  }
  adduser(username, password, mailid, phno) {
    this.userservices.adduser(username, password, mailid, phno);
  }
}
