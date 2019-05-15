import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.scss']
})
export class ModComponent  {
  // title = 'Angular7-CRUD';
  // display = false;
  // userform: FormGroup;
  // users: Usermodal[];

  // displayDialog: boolean;

  // car: any = {};

  // selectedCar: any;

  // newCar: boolean;

  // cars: any[];

  // cols: any[];
  // constructor(private fb: FormBuilder, private messageService: MessageService, private userservices: UserService,
  //   private confirmationService: ConfirmationService) {
  // }
  // ngOnInit() {
  //   this.cols = [
  //     { field: 'username', header: 'Username' },
  //     { field: 'password', header: 'Password' },
  //     { field: 'mailid', header: 'MailId' },
  //     { field: 'phoneno', header: 'Action' }
  // ];

  //   this.userform = this.fb.group({
  //     username: new FormControl('', Validators.required),
  //     password: new FormControl('', Validators.required),
  //     mailid: new FormControl('', [Validators.required, Validators.email]),
  //     phoneno: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[6-9]\\d{9}')])),
  //   });
  //   this.userservices
  //     .getUsers()
  //     .subscribe((data: Usermodal[]) => {
  //       // this.users = data;
  //       this.cars = data;
  //       // this.resetForm(this.userform);
  //       console.log(JSON.stringify(this.cars), data, 'Hai this siva' );
  //     });
  // }

  // resetForm(form?: NgForm) {
  //   if (form) {
  //     form.reset();
  //   }
  //   this.userservices.selectedEmployee = {
  //     _id: '',
  //     username: '',
  //     password: '',
  //     mailid: '',
  //     phoneno: '',
  //   }
  // }
  // showDialog() {
  //   this.display = true;
  // }
  // closedialog() {
  //   this.display = false;
  // }
  // createUserSubmit() {
  //   this.userservices.createUser(this.userform.value)
  //     .subscribe(data => {
  //       console.log(this.users + 'User created successfully.');
  //       this.display = false;
  //     });
  // }
  // deleteUser(_id: string) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure Delete the user?',
  //     accept: () => {
  //       {
  //         this.userservices.deleteUser(_id)
  //           .subscribe((res) => {
  //             this.messageService.add({ severity: 'success', summary: 'Deleted successfully' });
  //           });
  //       }
  //     }
  //   });

  // }

  // onEdit(emp: Usermodal) {
  //   console.log(emp, 'RowObject');
  //   this.display = true;
  //   this.userform.patchValue({ username: emp.username, password: emp.password, mailid: emp.mailid, phoneno: emp.phoneno });
  //   // this.userservices.selectedEmployee = emp;
  //   // this.userservices.putEmployee(this.userform.value)
  //   // .subscribe((res) => {
  //   //   // this.resetForm(this.userform);
  //   //  // this.refreshEmployeeList();
  //   //   this.messageService.add({severity: 'success', summary: 'Updated successfully'});
  //   // });
  // }



  // showDialogToAdd() {
  //   this.newCar = true;
  //   this.car = {};
  //   this.displayDialog = true;
  // }

  // save() {
  //   let cars = [...this.cars];
  //   if (this.newCar)
  //     cars.push(this.car);
  //   else
  //     cars[this.cars.indexOf(this.selectedCar)] = this.car;

  //   this.cars = cars;
  //   this.car = null;
  //   this.displayDialog = false;
  // }

  // delete() {
    
  //   let index = this.cars.indexOf(this.selectedCar);
  //   this.cars = this.cars.filter((val, i) => i != index);
  //   this.car = null;
  //   this.displayDialog = false;
  // }

  // onRowSelect(event) {
  //   this.newCar = false;
  //   this.car = this.cloneCar(event.data);
  //   this.displayDialog = true;
  // }

  // cloneCar(c: any): any {
  //   let car = {};
  //   for (let prop in c) {
  //     car[prop] = c[prop];
  //   }
  //   return car;
  // }
}
