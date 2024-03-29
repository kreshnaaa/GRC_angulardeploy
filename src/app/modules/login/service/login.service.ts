import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpWrapperService } from '../../../shared/services/httpwrapper.services';
import { LoginComponent } from '../login.component';
import { StandardResponse } from '../../../shared/models/standard.response.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private  apiUrl = 'http://192.168.29.128:108/api/userLogin';
  private  api_mfa = 'http://192.168.29.128:108/api/userAuthentication';
  

  constructor(private httpWrapperService:HttpWrapperService) { }

  addlogin(login: any): Observable<StandardResponse<LoginComponent>> {
    
    return this.httpWrapperService.post<LoginComponent>(this.apiUrl, login);
  }
  addmfa(mfa: any): Observable<StandardResponse<LoginComponent>>{
    debugger
    console.log("mfaData",mfa);
    return this.httpWrapperService.post<LoginComponent>(this.api_mfa,mfa);
  }
  
}
