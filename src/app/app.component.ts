import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators , NgForm, FormGroup} from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/components/common/api';
import { UserService } from '../app/services/user.service';
import { Usermodal } from './model/usermodal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ConfirmationService]
})
export class AppComponent implements OnInit {
  title = 'Angular7-CRUD';
  display = false;
  userform: FormGroup;
  users: Usermodal[];
  addUser = false;
  update = false;
  empdata;
  constructor(private fb: FormBuilder, private messageService: MessageService, private userservices: UserService,
              private confirmationService: ConfirmationService) {
  }
  ngOnInit() {

    this.userform = this.fb.group({
      _id  : new FormControl(''),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      mailid: new FormControl('', [Validators.required, Validators.email]),
      phoneno: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[6-9]\\d{9}')])),
    });
    this.userservices
      .getUsers()
      .subscribe((data: Usermodal[]) => {
        this.users = data;
      });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.userservices.selectedEmployee = {
      _id: '',
      username: '',
      password: '',
      mailid: '',
      phoneno: '',
    }
  }
  showDialog() {
    this.addUser = true;
    this.update = false;
    this.display = true;
  }
  closedialog() {
    this.display = false;
  }
  createUserSubmit() {
    const json = {
    username: this.userform.value.username, password: this.userform.value.password,
      mailid: this.userform.value.mailid, phoneno: this.userform.value.phoneno
    };

    if (this.addUser) {
      this.userservices.createUser(json)
      .subscribe( data => {
         console.log(this.users + 'User created successfully.');
         this.display = false;
      });
    } else if (this.update) {
      this.updateUser();
    }
  }

// tslint:disable-next-line: variable-name
deleteUser(_id: string, ) {
  if (confirm('Are you sure to delete this record ?') === true) {
    this.userservices.deleteUser(_id).subscribe((res) => {

      this.messageService.add({severity: 'success', summary: 'Deleted successfully'});
    });
  }
}

  onEdit(emp: Usermodal) {
    this.addUser = false;
    this.update = true;
    console.log(emp, 'RowObject', this.users.findIndex(obj => obj.username === emp.username));
    this.users.findIndex(obj => obj.username === emp.username);
    this.display = true;
    this.empdata = emp;
    this.userform.patchValue({username: emp.username, password: emp.password, mailid: emp.mailid, phoneno: emp.phoneno, _id: emp._id});
    this.userservices.selectedEmployee = emp;
  }
  updateUser() {
    this.userservices.putEmployee(this.userform.value)
    .subscribe((res) => {
      this.display = false;
      this.messageService.add({severity: 'success', summary: 'Updated successfully'});
    });
  }
}
