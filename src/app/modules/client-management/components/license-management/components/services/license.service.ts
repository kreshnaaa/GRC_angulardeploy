import { Injectable } from '@angular/core';
import { StandardResponse } from '../../../../../../shared/models/standard.response.model';
import { Observable } from 'rxjs';
import { HttpWrapperService } from '../../../../../../shared/services/httpwrapper.services';
import { License } from '../models/license.model';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  private apiUrl ='http://192.168.29.128:83/api/LicenseManagement/GetAllLicense';
  private api_goverancelookup ='http://192.168.29.128:83/api/Standard_Governance_LookUp/GovernanceMasterlookup';
  private api_Standarddropdown = 'http://192.168.29.128:83/api/Standard_Governance_LookUp/StandardMasterlookup';
  private api_update = 'http://192.168.29.128:83/api/LicenseManagement/UpdateLicense';
  // private api_urlpost = 'http://192.168.29.128:83/api/LicenseManagement/AddLicense'

  constructor(private httpWrapperService:HttpWrapperService) { }
  goverencedropdown(id: number): Observable<StandardResponse<any>> {
    const url = `${this.api_goverancelookup}?id=${id}`;
    return this.httpWrapperService.get(url);
  }
  Standarddropdown(id: number): Observable<StandardResponse<any>> {
    const url = `${this.api_Standarddropdown}?id=${id}`;
    return this.httpWrapperService.get(url);
  }
  getLicence(): Observable<StandardResponse<License[]>> {
    debugger
    const url = `${this.apiUrl}`;
    return this.httpWrapperService.get<License[]>(url);    
  }

  getLicenceById(lisenceId: number): Observable<StandardResponse<License>> {
    const url = `${this.apiUrl}/${lisenceId}`;
    return this.httpWrapperService.get<License>(url);
  }
  // addLicence(odd: any): Observable<StandardResponse<odd>> {
  
  //   return this.httpWrapperService.post<odd>(this.apiUrl, odd);
  // }

  addLicence(license: any): Observable<StandardResponse<License>> {
    debugger
    console.log('Payload:', JSON.stringify(license));
    return this.httpWrapperService.post<License>('http://192.168.29.128:83/api/LicenseManagement/AddLicense', license);
  }
  updateLicence(editedLicenseData: any): Observable<StandardResponse<License>> {
    console.log("inside updateLicence: ",editedLicenseData.licenseId)
    const url = `${this.api_update}`;
    return this.httpWrapperService.put<License>(url, editedLicenseData);
  }

  deleteLicence(lisenceId: number): Observable<StandardResponse<void>> {
    const url = `${this.apiUrl}/${lisenceId}`;
    return this.httpWrapperService.delete<void>(url);
  }
}
