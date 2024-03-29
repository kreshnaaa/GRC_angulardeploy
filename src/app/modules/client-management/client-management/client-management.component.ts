import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-client-management',
  standalone: true,
  imports: [],
  templateUrl: './client-management.component.html',
  styleUrl: './client-management.component.css'
})
export class ClientManagementComponent {
  
  userForm!:FormGroup;
  showPagination: boolean = true;

  showForm: boolean = false;
  initialFormValue: any;
  destory$ = new Subject();
  rows: any[] = []
 
 
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  roles = [
    { id: '1', name: 'Steering Committee' },
    { id: '2', name: 'CISO' },
    { id: '3', name: 'Senior Manager' },
    { id: '4', name: 'Manager' },
    { id: '5', name: 'Trainee' },
    { id: '6', name: 'Auditor' }
  ];
 
 
  constructor (private fb: FormBuilder,
    private router: Router,){
    this.userForm = this.fb.group({
      role: ['',[Validators.required]],
      name:['',[Validators.required,Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      emailId:['',[Validators.required, Validators.email]],
      phoneNo:['',[Validators.required, Validators.pattern(/^\d{10}$/)]],
      status:[''],
    });
  }
  
  
  
  toggleSelection() {
    this.showForm = !this.showForm;
  }
  onTableDataChange(event: any) {
    this.page = event;
   
  }
  

}
