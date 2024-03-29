import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../../../../../../shared/services/httpwrapper.services';
import { Customer } from '../models/clientprofile.model';
import { Observable } from 'rxjs';
import { StandardResponse } from '../../../../../../shared/models/standard.response.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientprofileService {
  private apiUrl = 'http://192.168.29.128:90/api/CustomerMasters';
  private apiUrl_update = 'http://192.168.29.128:107/api/CustomerMasters';

  constructor(
    private httpWrapperService:HttpWrapperService 
  ) { }
   
  getCustomer(): Observable<StandardResponse<Customer[]>> {
    const url = `${this.apiUrl}`;
    debugger
    return this.httpWrapperService.get<Customer[]>(url);    
  }

  getCustomerById(custId: number): Observable<StandardResponse<Customer>> {
    const url = `${this.apiUrl}/${custId}`;
    return this.httpWrapperService.get<Customer>(url);
  }
  addCustomer(customer: any): Observable<StandardResponse<Customer>> {
    console.log(customer);
    return this.httpWrapperService.post<Customer>(this.apiUrl, customer);
  }
  
  updateCustomer(editedCustomerData: any): Observable<StandardResponse<Customer>> {
    debugger
    console.log("inside updateCustomer: ",editedCustomerData.customerId)
    const url = `${this.apiUrl_update}/${editedCustomerData.customerId}`;
    return this.httpWrapperService.put<Customer>(url, editedCustomerData);
  }

  deleteCustomer(id: number): Observable<StandardResponse<void>> {
    // console.log(id)
    const url = `${this.apiUrl}/${id}`;
    
    
    return this.httpWrapperService.delete<void>(url);
  }
}
