import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpWrapperService } from '../../../../shared/services/httpwrapper.services';
import { Router } from '@angular/router';
import { UserService } from './components/services/user.service';
import { User } from './components/models/user.model';
import { Subject, filter, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from '../../../../shared/breadcrumb/breadcrumb.component';
import { CardheaderComponent } from '../../../../shared/cardheader/cardheader.component';
import { UserListComponent } from './user-list/user-list.component';
import { BreadcrumbItem } from '../../../../shared/models/breadcrumb.model';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule,FormsModule,NgxPaginationModule,BreadcrumbComponent,CardheaderComponent,UserListComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userForm: FormGroup;
  showPagination: boolean = true; 
  showForm: boolean = false;
  showUserForm: boolean = false;
  mastersText:string="master"
  isEditing = false;
  originalList: User[] = [];
  tableData: User[] = [];
  userList: User[] = [];
  searchText: string = '';
  initialFormValue: any;
  destory$ = new Subject();
  rolenamedropdownItems:any;
  clientRoleId:any;
  userId!:number;
  userid:any;
  isEditUser = false;
  isNewUser = false;
  // userEnum :UserEnum[]=[];
  rows: any[] = []

  // customerList: Customer[] = [];


  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
 
  customBreadcrumbs = [
    { label: 'Master', url: '/master', active: false },
    { label: 'Roles', url: '/role', active: true } // Assuming "Roles" is the active page
  ];
  constructor (private fb: FormBuilder,
    private router: Router,
    private userservice:UserService,
    private http_wrapper_service: HttpWrapperService
   ){
    this.userForm = this.fb.group({
      role: ['',[Validators.required]],
      name:['',[Validators.required,Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      email:['',[Validators.required, Validators.email]],
      phoneNo:['',[Validators.required, Validators.pattern(/^\d{10}$/)]],
      status:[''],
    });
  }
  ngOnInit() {
   
  }


  
  onTableDataChange(event: any) {
    this.page = event;
   
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  
  }

  toggleUserForm(): void {
    this.showUserForm = !this.showUserForm;
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
  
}
