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
  constructor(private fb: FormBuilder, private messageService: MessageService, private userservices: UserService,
              private confirmationService: ConfirmationService) {
  }
  ngOnInit() {

    this.userform = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      mailid: new FormControl('', [Validators.required, Validators.email]),
      phoneno: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[6-9]\\d{9}')])),
    });
    this.userservices
      .getUsers()
      .subscribe((data: Usermodal[]) => {
        this.users = data;
        // this.resetForm(this.userform);
        // console.log(this.users, 'Hai this siva' );
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
    this.display = true;
  }
  closedialog() {
    this.display = false;
  }
  createUserSubmit() {
    this.userservices.createUser(this.userform.value)
        .subscribe( data => {
           console.log(this.users + 'User created successfully.');
           this.display = false;
        });
  }
  deleteUser(_id: string) {
    this.confirmationService.confirm({
      message: 'Are you sure Delete the user?',
      accept: () => { {
      this.userservices.deleteUser(_id)
      .subscribe((res) => {
        this.messageService.add({severity: 'success', summary: 'Deleted successfully'});
      });
    }
  }
});

  }

  onEdit(emp: Usermodal) {
    console.log(emp, 'RowObject');
    this.display = true;
    this.userform.patchValue({username:emp.username,password:emp.password,mailid:emp.mailid,phoneno:emp.phoneno});
    // this.userservices.selectedEmployee = emp;
    // this.userservices.putEmployee(this.userform.value)
    // .subscribe((res) => {
    //   // this.resetForm(this.userform);
    //  // this.refreshEmployeeList();
    //   this.messageService.add({severity: 'success', summary: 'Updated successfully'});
    // });
  }
}
