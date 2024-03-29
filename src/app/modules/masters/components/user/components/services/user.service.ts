import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../../../../../../shared/services/httpwrapper.services';
import { StandardResponse } from '../../../../../../shared/models/standard.response.model';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl ='http://192.168.29.128:108/api/UserMaster?CustomerId=10'
  private api_rolelookup ='http://192.168.29.128:108/api/RoleMaster/roleslookup';
  private api_update =`http://192.168.29.128:108/api/UserMaster`;
  private api_post ='http://192.168.29.128:108/api/UserMaster';
  private api_delete ='http://192.168.29.128:108/api/UserMaster';

  constructor( private httpWrapperService:HttpWrapperService,) { }

  roledropdown(id: number): Observable<StandardResponse<any>> {
    const url = `${this.api_rolelookup}?id=${id}`;
    return this.httpWrapperService.get(url);
  }

getUser(): Observable<StandardResponse<User[]>> {
  const url = `${this.apiUrl}`;
  debugger
  return this.httpWrapperService.get<User[]>(url);    
}

getUserById(userId: number): Observable<StandardResponse<User>> {
  const url = `${this.apiUrl}/${userId}`;
  return this.httpWrapperService.get<User>(url);
}
addUser(user: any): Observable<StandardResponse<User>> {
  console.log("user data",user);
  return this.httpWrapperService.post<User>(this.api_post, user);
}
createUserWithCreatedAndRole(user: any): Observable<StandardResponse<User>> {
  console.log('Userdateais',user)
  // const url = "/api/users"; // Replace with your actual endpoint URL
  return this.httpWrapperService.post(this.apiUrl, { ...user, createdBy: 2, roleId: user.roleId });
 
}

updateUser(editedUserData: any,id: number ): Observable<StandardResponse<User>> {
  console.log("inside updateUser: ",id)
  const url = `${this.api_update}?Userid=${id}`;
  console.log(url)
  return this.httpWrapperService.put<User>(url, editedUserData);
}

// deleteUser(id: number): Observable<StandardResponse<void>> {
//   console.log(id)
//   const url = `${this.api_delete}/${id}`;
//   console.log(url)
//   return this.httpWrapperService.delete<void>(url);
// }
deleteUser(id: number): Observable<StandardResponse<any>> {
  const url = `${this.api_delete}/${id}?CustomerId=10`;
return this.httpWrapperService.delete<any>(url);
}
}
