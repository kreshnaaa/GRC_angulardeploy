import { Component } from '@angular/core';
import { Customer } from '../client-onboarding/components/models/clientprofile.model';
import { License } from './components/models/license.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, filter, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { LicenseService } from './components/services/license.service';
import { ClientprofileService } from '../client-onboarding/components/services/clientprofile.service';
import { HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-license-management',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule,FormsModule,NgxPaginationModule],
  templateUrl: './license-management.component.html',
  styleUrl: './license-management.component.css'
})
export class LicenseManagementComponent {
  customerList: Customer[] = [];
  licenselist: License[] = [];
  licenceForm!: FormGroup;
  licenses$: any;
  selectedFileName: string = '';
  lisenceStdNames: string[] = [];
  showlisenceStdName = false;
  showForm: boolean = false;
  initialFormValue: any;
  destory$ = new Subject();
  tableData: License[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  originalList: License[] = [];
  customerlist: Customer[] = [];
  goverencenamedropdownItems: any;
  standardnamedropdownItems: any;
  id: any;
  destroyed$ = new Subject();
  isNewLicense = false;
  isEditLicense = false;
  isSubmitting = false;
  licenceId!: number;
  licenceid:any;
  constructor(private fb: FormBuilder,
    private router: Router,
    private licenseservice: LicenseService,
    private http: HttpClient,
    private clientprofile: ClientprofileService,
    
  ) {
    this.licenceForm = this.fb.group({
      customerId: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      contractDocuments: ['', [Validators.required]],
      startOrRenewalDate: ['', [Validators.required]],
      // licensename: ['', [Validators.required]],
      standardId: ['', [Validators.required]],
      // lisenceStdName:['',[Validators.required]],
      // menus: ['',[Validators.required]], 
      contractPeriodInMonths: ['', [Validators.required]],
      // lisenceRenewalDate : ['',[Validators.required]],
      remarks: ['', [Validators.required]],
      active: ['']
    })
  }
  ngOnInit() {
    this.getCustomerlist();
    this.loadUserDetails();

    debugger
    this.licenseservice.goverencedropdown(this.id).subscribe((res) => {
      this.goverencenamedropdownItems = res;
    });
    this.licenseservice.Standarddropdown(this.id).subscribe((res) => {
      console.log("Standarddropdown_data: ", res)
      this.standardnamedropdownItems = res;
      console.log("standardnamedropdownItems: ", this.standardnamedropdownItems)
    });

    // this.licenceForm.get('startOrRenewalDate')?.valueChanges.subscribe(startDate => {
    //   this.calculateEndDate();
    // });

    // this.licenceForm.get('contractPeriodInMonths')?.valueChanges.subscribe(contractPeriod => {
    //   this.calculateEndDate();
    // });
    this.getLicencelist();

  }

  private loadUserDetails(): void {
  }


  // calculateEndDate() {
  //   const startDate = this.licenceForm.get('startOrRenewalDate')?.value;
  //   const contractPeriod = this.licenceForm.get('contractPeriodInMonths')?.value;

  //   if (startDate && contractPeriod) {
  //     const endDate = new Date(startDate);
  //     endDate.setMonth(endDate.getMonth() + contractPeriod);
  //     this.licenceForm.get('endDate')?.setValue(endDate);
  //   } else {
  //     this.licenceForm.get('endDate')?.setValue(null);
  //   }
  // }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      this.selectedFileName = file ? file.name : '';
    }
  }
  navigateToNext() {
    debugger
    this.router.navigate(['/even']);
  }
  onMenuChange(): void {
    this.governanceTouched = false;
    const lisenceGovernanceControl = this.licenceForm.get('lisenceGovernanceName');

    if (lisenceGovernanceControl) {
      const selectedlisenceGovernanceName = lisenceGovernanceControl.value;
      switch (selectedlisenceGovernanceName) {
        case 'cybersecurity':
          this.lisenceStdNames = ['ISO 31k', 'Aramco', 'SAMA CSF', 'NCA ECC', 'CITC', 'CTI', 'PCI DSS'];
          break;
        case 'business_continuity':
          this.lisenceStdNames = ['22301', 'SAMA BCM'];
          break;
        case 'quality':
          this.lisenceStdNames = ['IsO9000'];
          break;
        case 'health_safety':
          this.lisenceStdNames = ['IsO 14k'];
          break;
        case 'privacy':
          this.lisenceStdNames = ['IsO 27701', 'ISO 18001'];
          break;
        case 'cloud':
          this.lisenceStdNames = ['IsO 17001', 'ISOCSTAR'];
          break;
        case 'data':
          // Handle 'data' case if needed
          break;
        default:
          this.lisenceStdNames = [];
      }

      this.showlisenceStdName = this.lisenceStdNames.length > 0;
    }
  }
  getFormValue() {
    return this.licenceForm?.value;
  }

  // getLicencelist(): void{
  //   debugger
  //   this.licenseservice
  //   .getLicence()
  //   .pipe(takeUntil(this.destory$))
  //   .subscribe((items: any)=>{
  //     console.log("item",items.data);
  //     for (const item of items) {
  //       this.tableData.push(item);       
  //     }
  //     this.originalList = this.tableData;
  //     console.log('tableData',this.tableData)
  //   });
  // }
  getLicencelist(): void {
    debugger;
    this.licenseservice
      .getLicence()
      .pipe(takeUntil(this.destory$))
      .subscribe((response: any) => {
        console.log("response", response);
        const items = response.data; // Assuming 'data' is the property containing the items
        console.log(items)
        for (const item of items) {

          // Convert standardId to name
          const matchingStandardItem = this.standardnamedropdownItems.find((standard: { id: number, name: string }) => standard.id === item.standardId);
          let convertedStandardId: any;

          if (matchingStandardItem) {
            convertedStandardId = matchingStandardItem.name;
          } else {
            convertedStandardId = 'Unknown Standard';
          }

          item.standardIdName = convertedStandardId;

          // Convert customerId to name
          const matchingCustomer = this.customerlist.find((customer: { customerId: number, customerCompanyName: string }) => customer.customerId === item.customerId);
          let convertedCustomerId: any;

          if (matchingCustomer) {
            convertedCustomerId = matchingCustomer.customerCompanyName;
          } else {
            convertedCustomerId = 'Unknown Customer';
          }

          item.customerIdName = convertedCustomerId;
          console.log("item data:", item)
          this.tableData.push(item);
        }
        console.log("item data1:", this.tableData)
        // this.originalList = this.tableData;
        console.log('tableData', this.tableData);
      });
  }

  submitFormData(): void {
    debugger
    // Log the form data
    console.log('Profile Data:', JSON.stringify(this.licenceForm.value, null, 1));

    // Mark all controls as touched for validation
    Object.keys(this.licenceForm.controls).forEach((field) => {
      const control = this.licenceForm.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    })

    const licenseDetails = {
      // id: this.licenceForm.value.id,
      customerId: Number(this.licenceForm.value.customerId),
      standardId: Number(this.licenceForm.value.standardId),
      contractPeriodInMonths: Number(this.licenceForm.value.contractPeriodInMonths),
      startOrRenewalDate: this.licenceForm.value.startOrRenewalDate,
      endDate: this.licenceForm.value.endDate,
      // lisenceRenewalDate: this.licenceForm.value.lisenceRenewalDate,
      contractDocuments: this.licenceForm.value.contractDocuments,
      remarks: this.licenceForm.value.remarks,
      active: this.licenceForm.value.active,
      createdBy: 1,
    };
    console.log("details", licenseDetails);

    // Call the service method to add license
    this.licenseservice.addLicence(licenseDetails).subscribe(
      (response) => {
        // Handle success response
        console.log('Post successful', response);
        this.licenceForm.reset();
        this.getLicencelist();
      },
      (error) => {
        // Handle error
        console.error('Error from backend:', error);
      }
    );
    this.getLicencelist();
    // this.resetAndReloadGrid();

    // this.isSubmitting = false;

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
  // onCancel() {
  //   this.licenceForm.reset(this.initialFormValue);
  // }
  governanceTouched = false;
  get governanceNotSelected() {
    return this.governanceTouched && this.licenceForm.get('lisenceGovernanceName')?.hasError('required');
  }
  onDeleteButtonClick(row: any): void {
    // debugger
    // console.log(row)
    // console.log(row.userId)
    // this.userservice.deleteUser(row.userId).subscribe(
    //   () => {
    //     // If the deletion is successful, remove the row from the array
    //     // const index = this.rows.indexOf(id);
    //     const index = this.rows.findIndex(row => row.userId === row.userId);

    //     if (index !== -1) {
    //       this.rows.splice(index, 1);
    //     }
    //   },
    //   (error) => {
    //     // Handle error if needed
    //     console.error('Error deleting row:', error);
    //   }
    // );
  }
  getCustomerlist(): void {
    // debugger
    this.clientprofile
      .getCustomer()
      .pipe(takeUntil(this.destory$))
      .subscribe((items: any) => {
        console.log("item", items);
        for (const item of items) {
          this.customerlist.push(item);
        }
        console.log('tableData', this.customerlist)
      });
  }

  // session storage 

  // login() {
  //   const userData = {
  //     userId: 'exampleUserId',
  //     password: 'examplePassword',
  //     role: 'admin' // or 'client' based on your needs
  //   };

  //   // Store user data in session storage
  //   this.authservice.setUserData(userData);

  //   // Example: If the user is an admin, you can post the 'created by' data to the backend
  //   if (this.authservice.isAdmin()) {
  //     // Code to post 'created by' to the backend
  //     // Example:
  //     const createdByData = {
  //       userId: userData.userId,
  //       // Other data
  //     };

  //     this.licenseservice.addLicence(userData).subscribe(
  //       (response) => {
  //         // Handle success response
  //         console.log('Response from backend:', response);
  //       },
  //       (error) => {
  //         // Handle error
  //         console.error('Error from backend:', error);
  //       }
  //     );
  //   }
  // }
  // logout() {
  //   // Clear user data from session storage on logout
  //   this.authservice.clearUserData();
  // }

  GetByLicenceId( licenceForm:License){
    debugger
    this.licenceId = licenceForm.licenseId
    this.licenseservice.getLicenceById(this.licenceId).subscribe((responce:any)=>{
      console.log("responce", responce)
      this.licenceForm = responce.data;
    })
  }

  editLicense(licenceFormdata: License, option: any): void {
    if (option === 'edit') {
      this.isEditLicense = true;
      this.isNewLicense = false;
      this.licenceid = licenceFormdata.licenseId;
      console.log('In edit', licenceFormdata);
  
      // Set form values based on license data
      this.licenceForm.setValue({
        customerId: licenceFormdata.customerId,
        standardId: licenceFormdata.standardId,
        contractPeriodInMonths: licenceFormdata.contractPeriodInMonths,
        startOrRenewalDate: licenceFormdata.startOrRenewalDate,
        endDate: licenceFormdata.endDate,
        contractDocuments: licenceFormdata.contractDocuments,
        remarks:licenceFormdata.remarks,
        editedBy:1,
        active: this.licenceForm.value.active, // Preserve existing active value
      });
  
      console.log('licenceForm Data', licenceFormdata);
    } else if (option === 'delete') {
      // Implement delete logic (assuming updateLicence handles deletes as well)
      // ... (your delete logic here)
    } else if (option === 'submit') {
      if (this.licenceForm.invalid) {
        return; // Handle form validation errors (e.g., display error messages)
      }
      // console.log("licenceFormdata:", licenceFormdata);
      // console.log("License ID:", this.licenceid); // Log for debugging
      // const editedLicenseData = { ...licenceFormdata, licenseId: this.licenceid }; // Merge licenceFormdata with licenceid
      // console.log("Edited License Data:", editedLicenseData); // Log for debugging
      // console.log("Edited License Data id:", editedLicenseData.licenseId);\
      const editedLicenseData = { 
        ...licenceFormdata, 
        licenseId: this.licenceid, 
        editedBy: 1, // Assuming editedBy ID is 1, change it accordingly
        licenceForm: this.licenceForm.value // Include licenceForm data
      }; // Merge licenceFormdata with licenceid
      console.log("Edited License Data:", editedLicenseData); // Log for debugging
      console.log("Edited License Data id:", editedLicenseData.licenseId);
      
      this.licenseservice.updateLicence(editedLicenseData)
        .pipe(
          filter((response) => !!response),
          takeUntil(this.destory$)
        )
        .subscribe((response) => {
          this.isEditLicense = false;
          console.log('License updated successfully:', response);
          this.getLicencelist();
        }, (error) => {
          console.error('Error updating license:', error);
        });
    }
}
  onCancel(): void {
    this.isEditLicense = false;
    this.isNewLicense = false;
  }
  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
  private resetAndReloadGrid() {
    debugger;
    this.licenceForm.reset({ status: 'Active' });
    this.getLicencelist();
    this.isNewLicense = false;
    this.isEditLicense = false;
  }
  // if (this.isEditLicense) {
  //   this.loadCustomerData(); // This should fetch and set the data
  // }
  // loadLicenseData(licenseId: string) {
  //   this.licenseservice.getLicencelist(licenseId).subscribe({
  //     next: (data) => {
  //       this.populateForm(data);
  //     },
  //     error: (error) => {
  //       console.error('There was an error fetching the license data', error);
  //     }
  //   });
  // }

  // populateForm(data: License) {
  //   this.licenceForm.setValue({
  //     customerId: data.customerId,
  //     standardId: data.standardId,
  //     // Set other form controls as necessary
  //   });
  //   // Or use patchValue if you are not setting all values
  // }
}

