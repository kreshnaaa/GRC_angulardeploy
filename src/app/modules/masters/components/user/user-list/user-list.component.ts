import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  userForm!: FormGroup;
  isEditing = false;
  rolenamedropdownItems:any;
  @Input() showUserForm: boolean = false;

  
  constructor (private fb: FormBuilder,
    // private userservice:UserService,
   ){
    this.userForm = this.fb.group({
      role: ['',[Validators.required]],
      name:['',[Validators.required,Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      email:['',[Validators.required, Validators.email]],
      status:[''],
    });
  }

  ngOnInit(){
  }

}
