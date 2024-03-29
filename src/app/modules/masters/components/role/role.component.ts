import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RolesService } from './components/services/roles.service';
import { Subject, filter, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { role } from './components/models/role.model';
import { AuthService } from '../../../../shared/services/auth.services';



export class UserDetails {
  username!: string;
  userid!: number;
  custid!: number;
  roleid!: number;
  isClientAdmin!: boolean;
  isSystemAdmin!: boolean;
 
}
@Component({
  selector: 'app-role',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule,FormsModule,NgxPaginationModule],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent {

  roleForm!: FormGroup;
  editedRole: any;
  row: any;
  itemList: any[] = [];
  isEditRole=false;
  isNewRole=false;
  roleid:any;
  roleId!:number;
 
 
  showPagination: boolean = true;
  showEditModal: boolean = false;
  showForm: boolean = false;
  originalList: role[] = [];
  tableData: role[] = [];
  initialFormValue: any;
  destroy$ = new Subject();
  rowData: any[] = [
  ];
 
  roledId!:number;
 
// editRow(rowData: any, action: string) {
//   if(action === 'delete') {
//     this.rowData = this.rowData.filter(row => row !==rowData);
 
//   }else if(action === 'edit'){
//     console.log('Edit row:',rowData);
//   }
 
// }
 
 
page: number = 1;
count: number = 0;
tableSize: number = 5;
tableSizes: any = [3, 6, 9, 12];
  createdby: any;
  sysRoleId!:number;
  userId: any;
  CustomerId!: 10;
 
 
constructor (private fb: FormBuilder,
  private router: Router,
  private authService: AuthService,
  private roleservice :RolesService){


  this.roleForm = this.fb.group({
    roleName: ['',[Validators.required]],
    // roleType:['',[Validators.required,Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    description:['',[Validators.required]],
    active:[''],
  });
 
  this.editedRole ={};
}
 
 
 ngOnInit():void {
  const roleDetails = {};
this.getRolelist();
this.roleservice.createRole(roleDetails);
this.roleservice.getRoles();
  // this.UserDetails();
 
 }
 
 UserDetails():any{
 
  let userdata :any | null ;
userdata = sessionStorage.getItem('userDetails');
const userObject = JSON.parse(userdata);
      const userDetails = new UserDetails();
  this.userId= userObject.userid
return  this.userId;
  // this.userId=this.authService.getUserId();
 
 }
 
onTableDataChange(event: any) {
  this.page = event;
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
 
}
toggleFormDisplay() {
  this.showForm = !this.showForm;
}
// openEditModal(row:any){
//   console.log("inside the editmodel:",row)
//   this.editedRole =row ;
//   this.showEditModal = true;
//   this.showForm=false;
// }
// saveEdit(){
//   console.log('Edited Role:',this.editedRole);
//   this.closeEditModal();
 
// }
// closeEditModal(){
//   this.showEditModal = false;
//   this.showForm = true;
// }
 
 
 
onCancel() {
  this.roleForm.reset(this.initialFormValue);
}
// editRow(rowData: any,action: string) {
//   debugger
//   if(action ==='delete'){
//     this.sysRoleId = rowData.sysRoleId ;
 
//     this.deleteRow(this.sysRoleId);
 
//   }else if (action ==='edit'){
//     // this.sysRoleId = rowData.sysRoleId ;
 
//     // this.editDataRow(rowData);
//   }
// }
deleteRow(sysRoleId: number){
  console.log("inside the deleteRow: ", sysRoleId)
  this.roleservice.deleteRole(sysRoleId).subscribe((resposce:any)=>{
    console.log("delete responce",resposce);
    this.getRolelist();
  })
  // this.getRolelist();
}
// editDataRow(rowData: any){
//   console.log('Editing row:',rowData);
 
// }
 
 
submitData():void{
  debugger
  Object.keys(this.roleForm.controls).forEach((field)=>{
    const control = this.roleForm.get(field);
    if (control){
      control.markAsTouched({onlySelf : true});
    }
  });
  debugger
//   this.createdby = this.UserDetails();
//  console.log("createdby",this.createdby);
   const roleDetails={
 
    roleName: this.roleForm.value.roleName,
    // createdby: Number(this.createdby),
    //  roletype: this.roleForm.value.roleType,
    description: this.roleForm.value.description,
    comments: this.roleForm.value.string,
    active: this.roleForm.value.active,
    createdBy:2,
    customerId:10,
 
   }
   console.log(this.roleForm.valid)
   console.log(this.roleForm.value.role)
   console.log("roleDetails",roleDetails);
   this.roleservice.createRole(roleDetails)
   .subscribe(
    (response) =>{
      debugger
       console.log('Post successful', response);
       this.getRolelist();
     },
     (error: any) => {
       console.error('Error posting data', error);
     }
   );
  //  this.getRolelist();
 
 
}
 
 onClickIcon(){
  //  this.router.navigate(['/login']);
 
 }
  getRolelist(): void{
  this.tableData=[]
  this.roleservice
   
  .getRoles()
    .pipe(takeUntil(this.destroy$))
    .subscribe((items: any)=>{
      debugger
     console.log("item",items);
      for (const item of items.data) {
        // console.log(item)
        this.tableData.push(item);
 
   }
   debugger
    this.originalList = this.tableData;
    console.log('tableData',this.tableData)
  });
 }
// getRoleData() {
//   const data = {}; // Provide the required data
//   this.roleservice.getRoles()
//     .subscribe((response: any) => {
//       // Handle response
//     },
//     (error: any) => {
 
//     }
//     );
// } 
GetByroleId( roleForm:role){
  debugger
  this.roleId = roleForm.roleId
  this.roleservice.getRoleById(this.roleId).subscribe((responce:any)=>{
    console.log("responce", responce)
    this.roleForm = responce.data;
  })
}

editRole(roleFormdata: role, option: any): void {
  debugger
  if (option === 'edit') {
    this.isEditRole = true;
    this.isNewRole = false;
    this.roleid = roleFormdata.sysRoleId;
    console.log('In edit', roleFormdata);

    // Set form values based on license data
    this.roleForm.setValue({
      roleName: roleFormdata.roleName,
      description: roleFormdata.description,
      active: roleFormdata.active,
    });
    
    console.log("this.roleForm:" , this.roleForm)
    console.log(this.roleForm.valid)
    console.log('roleForm Data', roleFormdata);
  } else if (option === 'delete') {
    // Implement delete logic (assuming updateLicence handles deletes as well)
    // ... (your delete logic here)
  } else if (option === 'submit') {
    if (this.roleForm.invalid) {
      return; // Handle form validation errors (e.g., display error messages)
    }
    // console.log("licenceFormdata:", licenceFormdata);
    // console.log("License ID:", this.licenceid); // Log for debugging
    // const editedLicenseData = { ...licenceFormdata, licenseId: this.licenceid }; // Merge licenceFormdata with licenceid
    // console.log("Edited License Data:", editedLicenseData); // Log for debugging
    // console.log("Edited License Data id:", editedLicenseData.licenseId);\
    const editedRoleData = { 
      roleName:this.roleForm.value.roleName,
      description:this.roleForm.value.description,
      comments:this.roleForm.value.comments,
      createdBy: 1,
      active: this.roleForm.value.active,
      customerId: 10

    }; // Merge licenceFormdata with licenceid
    console.log("Edited License Data:", editedRoleData,this.roleid); // Log for debugging
    // console.log("Edited License Data id:", editedRoleData.roleId);
    
    this.roleservice.updateRole(editedRoleData,this.roleid)
      .pipe(
        filter((response) => !!response),
        takeUntil(this.destroy$)
      )
      .subscribe((response) => {
        this.isEditRole = false;
        console.log('Role updated successfully:', response);
        this.getRolelist();
      }, (error) => {
        console.error('Error updating role:', error);
      });
  }
} 
 
}

