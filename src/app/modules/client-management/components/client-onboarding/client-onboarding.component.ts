import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Customer } from './components/models/clientprofile.model';
import { HttpWrapperService } from '../../../../shared/services/httpwrapper.services';
import { ClientprofileService } from './components/services/clientprofile.service';
import { Subject, filter, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CountryCode } from './components/enum';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@Component({
  selector: 'app-client-onboarding',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule,FormsModule,NgxPaginationModule],
  templateUrl: './client-onboarding.component.html',
  styleUrl: './client-onboarding.component.css'
})
export class ClientOnboardingComponent implements OnInit {
  profileForm: FormGroup;
  showSuccessPopup = false;
  successMessage = '';  
  showForm: boolean = false;
  showPagination: boolean = true; 
  searchText: string = '';
  tableData: Customer[] = [];
  originalList: Customer[] = [];
  rows: any[] = [];
  customerId!:number;
  customerid:any;
  initialFormValue: any;
  destory$ = new Subject();
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  isEditCustomer = false;
  isNewCustomer = false;
  destroyed$: any;

  constructor ( private fb: FormBuilder,
    private router: Router,
    private clientprofile :ClientprofileService,
    private changeDetectorRef: ChangeDetectorRef
    ){
       
    this.profileForm = this.fb.group({
      customerCompanyName : ['',[Validators.required,Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      customerAddress : ['',[Validators.required]],
      customerCity : ['',[Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
      customerState : ['',[Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
      customerCountryOfOperation:['',[Validators.required]],
      customerPhoneNumber:['',[Validators.required, Validators.pattern(/^\d{10}$/)]],
      // customername:['',[Validators.required,Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      customerEmailId:['',[Validators.required, Validators.email]],
      customerDescription : ['',[Validators.required]],
      // Add your FormControl for coutoper
      // showAdditionalData: [false]
    
    });
  }

  
  ngOnInit() {
    this.getCustomerlist();
  }
  
  onTableDataChange(event: any) {
    this.page = event;
   
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  
  }

  saveFormData(): void{
      // Handle form submission logic here
      Object.keys(this.profileForm.controls).forEach((field)=>{
        const control = this.profileForm.get(field);
        if (control){
          control.markAsTouched({onlySelf : true});
        }
      });
        
        const custDetails={
          customerCompanyName: this.profileForm.value.customerCompanyName,
          customerAddress: this.profileForm.value.customerAddress,
          customerCity: this.profileForm.value.customerCity,
          customerState: this.profileForm.value.customerState,
          customerCountryOfOperation: this.profileForm.value.customerCountryOfOperation,
          customerPhoneNumber: this.profileForm.value.customerPhoneNumber,
          customername: this.profileForm.value.customername,
          customerEmailId: this.profileForm.value.customerEmailId,
          customerDescription: this.profileForm.value.customerDescription,
        }
    
        this.clientprofile.addCustomer(custDetails)
        .subscribe(
          (response) =>{
            // debugger
            console.log("Form Validity:", this.profileForm.valid);
            console.log('Post successful', response);
            // Optionally, reset the form after successful submission
            this.profileForm.reset();
            this.getCustomerlist();
          },
          (error) => {
            console.error('Error posting data', error);
          }
        );
      
        // console.log('profile Data:',JSON.stringify(this.profileForm.value,null,1));
        this. getCustomerlist();
      }

  getCustomerlist(): void{
    // debugger
    this.tableData = [];
    this.clientprofile
    .getCustomer()
    .pipe(takeUntil(this.destory$))
    .subscribe((items: any)=>{
      console.log("item",items);
      for (const item of items) {
        this.tableData.push(item);       
      }
      // this.originalList = this.tableData;
      console.log('tableData',this.tableData)
    });
  }

  onCancel(): void {
    this.isEditCustomer = false;
    this.isNewCustomer = false;
  }
  getCountryCodes() {
    // Return the values of the Country enum
    return Object.values(CountryCode);
  }
  toggleAddNewForm() {
    this.isEditCustomer = false;
    this.isNewCustomer = true;
}
  onDeleteButtonClick(row: any): void {
    // debugger
    // Call the delete method from your service
    console.log(row)
    console.log(row.customerId)
    this.clientprofile.deleteCustomer(row.customerId).subscribe(
      () => {
        // If the deletion is successful, remove the row from the array
        // const index = this.rows.indexOf(id);
        const index = this.rows.findIndex((item) => item.customerId === row.customerId);
        console.log('Index before deletion:', index);
        if (index !== -1) {
          this.rows.splice(index, 1);
          // Update the table data with the updated rows
          this.getCustomerlist();
          
        }
      },
      (error) => {
        // Handle error if needed
        console.error('Error deleting row:', error);
      }
    );
  }

  filterGrid(): void {
    console.log("Original List", this.originalList);
    debugger
    const searchTextLower = this.searchText.toLowerCase();
    console.log('Search calling:', this.searchText);
    if (!this.searchText) {
      this.tableData = [...this.originalList];
    } else {
      this.tableData = this.originalList.filter(
        (f) =>
          f.customerCompanyName.toLowerCase().includes(this.searchText.toLowerCase()) ||
          f.customerCity.toLowerCase().includes(this.searchText.toLowerCase()) ||
          f.customerDescription.toString().includes(this.searchText.toLowerCase())||
          f.customerPhoneNumber.toString().toLowerCase().includes(this.searchText.toLowerCase())||
          f.customerAddress.toLowerCase().includes(this.searchText.toLowerCase()) ||
          f.customerState.toLowerCase().includes(this.searchText.toLowerCase()) ||
          f.customerCountryOfOperation.toLowerCase().includes(this.searchText.toLowerCase()) ||
          f.customerEmailId.toLowerCase().includes(this.searchText.toLowerCase()) ||
          f.customerDescription.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  showSuccess() {
    this.successMessage = 'Posted data successfully!';
    this.showSuccessPopup = true;
  }

  GetcustomerbyId( profileForm:Customer){
    // debugger
    this.customerId = profileForm.customerId
    this.clientprofile.getCustomerById(this.customerId).subscribe((responce:any)=>{
      console.log("responce", responce)
      this.profileForm = responce.data;
    })
  }

//   editcustomer(customerFormdata:Customer,option:any):void{
//     // debugger
//     if (option === 'edit') {
//       this.isEditCustomer = true;
//       this.isNewCustomer = false;
//       this.customerid = customerFormdata.customerId;
//       console.log('In edit', customerFormdata);
  
//       // Set form values based on license data
//       this.profileForm.setValue({
//         // customerId: customerFormdata.customerId,
//         customerCompanyName: customerFormdata.customerCompanyName,
//         customerAddress: customerFormdata.customerAddress,
//         customerCity: customerFormdata.customerCity,
//         customerState: customerFormdata.customerState,
//         customerCountryOfOperation: customerFormdata.customerCountryOfOperation,
//         customerPhoneNumber: customerFormdata.customerPhoneNumber,
//         // customername: customerFormdata.customername,
//         customerEmailId: customerFormdata.customerEmailId,
//         customerDescription: customerFormdata.customerDescription,
//         // editedBy:1,
//       });
  
//       console.log('customerForm Data', customerFormdata);
//     } else if (option === 'delete') {
//       // Implement delete logic (assuming updateLicence handles deletes as well)
//       // ... (your delete logic here)
//     } else if (option === 'submit') {
//       if (this.profileForm.invalid) {
//         return; // Handle form validation errors (e.g., display error messages)
//       }
//       // console.log("licenceFormdata:", licenceFormdata);
//       // console.log("License ID:", this.licenceid); // Log for debugging
//       // const editedLicenseData = { ...licenceFormdata, licenseId: this.licenceid }; // Merge licenceFormdata with licenceid
//       // console.log("Edited License Data:", editedLicenseData); // Log for debugging
//       // console.log("Edited License Data id:", editedLicenseData.licenseId);\
//       const editedCustomerData = { 
//         ...customerFormdata, 
//         customerId: this.customerid, 
//         // editedBy: 1, // Assuming editedBy ID is 1, change it accordingly
//         profileForm: this.profileForm.value // Include licenceForm data
//       }; // Merge licenceFormdata with licenceid
//       console.log("Edited customer Data:", editedCustomerData); // Log for debugging
//       console.log("Edited customer Data id:", editedCustomerData.customerId);
      
//       this.clientprofile.updateCustomer(editedCustomerData)
//         .pipe(
//           filter((response) => !!response),
//           takeUntil(this.destory$)
//         )
//         .subscribe((response) => {
//           this.isEditCustomer = false;
//           console.log('Customer updated successfully:', response);
//           this.getCustomerlist();
//         }, (error) => {
//           console.error('Error updating customer:', error);
//         });
//     }
// }

editcustomer(customerFormdata: Customer, option: any): void {
 debugger
  if (option === 'edit') {
      this.isEditCustomer = true;
      this.isNewCustomer = false;
      this.customerid = customerFormdata.customerId;
      console.log('In edit', customerFormdata);

      // Set form values based on customer data
      this.profileForm.patchValue({
          customerCompanyName: customerFormdata.customerCompanyName,
          customerAddress: customerFormdata.customerAddress,
          customerCity: customerFormdata.customerCity,
          customerState: customerFormdata.customerState,
          customerCountryOfOperation: customerFormdata.customerCountryOfOperation,
          customerPhoneNumber: customerFormdata.customerPhoneNumber,
          customerEmailId: customerFormdata.customerEmailId,
          customerDescription: customerFormdata.customerDescription,
      });
      console.log("Form Validity:", this.profileForm.valid);
      console.log('customerForm Data', this.profileForm.value);
  } else if (option === 'delete') {
      // Implement delete logic (assuming updateCustomer handles deletes as well)
      // ... (your delete logic here)
  } else if (option === 'submit') {
      if (this.profileForm.invalid) {
          return; // Handle form validation errors (e.g., display error messages)
      }
      
      const editedCustomerData = { 
          ...customerFormdata, 
          customerId: this.customerid,
          customerCompanyName: this.profileForm.value.customerCompanyName,
          customerAddress: this.profileForm.value.customerAddress,
          customerCity: this.profileForm.value.customerCity,
          customerState: this.profileForm.value.customerState,
          customerCountryOfOperation: this.profileForm.value.customerCountryOfOperation,
          customerPhoneNumber: this.profileForm.value.customerPhoneNumber,
          customerEmailId: this.profileForm.value.customerEmailId,
          customerDescription: this.profileForm.value.customerDescription,
      };

      console.log("Edited customer Data:", editedCustomerData); // Log for debugging
      
      this.clientprofile.updateCustomer(editedCustomerData)
      
          .pipe(
              filter((response) => !!response),
              takeUntil(this.destory$)
          )
          .subscribe((response) => {
              this.isEditCustomer = false;
              console.log('Customer updated successfully:', response);

              this.getCustomerlist();
          }, (error) => {
              console.error('Error updating customer:', error);
          });
  }
}

ngOnDestroy(): void {
  this.destroyed$.next(null);
  this.destroyed$.complete();
}
}
