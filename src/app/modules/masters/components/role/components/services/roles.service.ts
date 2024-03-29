import { Injectable } from '@angular/core';
import { StandardResponse } from '../../../../../../shared/models/standard.response.model';
import { Observable } from 'rxjs';
import { HttpWrapperService } from '../../../../../../shared/services/httpwrapper.services';
import { role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private apiUrl = 'http://192.168.29.128:108/api/RoleMaster?CustomerId=10';
  private roleApiUrl =' http://192.168.29.128:108/api/RoleMaster';
  private api_update = 'http://192.168.29.128:108/api/RoleMaster';
  private api_post = 'http://192.168.29.128:108/api/RoleMaster';
  private api_delete = 'http://192.168.29.128:108/api/RoleMaster'
  constructor(private httpWrapperService: HttpWrapperService ) { }
 
  getRoles(): Observable<StandardResponse<any[]>> {
    const url = `${this.apiUrl}`
    console.log(url)
    return this.httpWrapperService.get<role[]>(url);
  }
  getRoleById(sysRoleId: number): Observable<StandardResponse<role>>{
  const url = `${this.roleApiUrl}/${sysRoleId}`;
    return this.httpWrapperService.get<role>(url);
  }
  createRole(roleDetails: any): Observable<StandardResponse<role>> {
    debugger
 
    console.log("roledata",roleDetails)
    const url = `${this.api_post}`;
   
    return this.httpWrapperService.post<role>(url,roleDetails);
  }
  updateRole(roleFormdata: any,id:number): Observable<StandardResponse<role>> {
    // debugger
    console.log("inside updateLicence: ",id)
    const url = `${this.api_update}?Roleid=${id}`;
    return this.httpWrapperService.put<role>(url, roleFormdata);
  }
 
  deleteRole(roleId: number): Observable<StandardResponse<any>> {
    const url = `${this.api_delete}/${roleId}?CustomerId=10`;
  return this.httpWrapperService.delete<any>(url);
  }
}
