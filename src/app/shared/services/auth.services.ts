import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { BehaviorSubject, Observable } from 'rxjs';
export interface UserDetails {
  username: string;
  userid: number;
  custId: number;
  roleId: number;
  sysRoleid: number;
}
 
export interface EntitlementDetail {
  sysRoletype: number;
  menuList: {
    menuId: number;
    menuName: string;
    accePrev: {
      view: boolean;
      edit: boolean;
      newRec: boolean;
      delete: boolean;
    };
  }[];
}
 
export interface Project {
  projId: number;
  projCode: string;
  formList: Form[];
}
 
export interface Form {
  formId: number;
  formName: string;
}
 
export interface EligibleForms {
  projectList: Project[];
}
 
interface EntitlementMenu {
  menuId: number;
  menuName: string;
  accePrev: AccessPrivileges;
}
 
interface AccessPrivileges {
  view: boolean;
  edit: boolean;
  newRec: boolean;
  delete: boolean;
}
 
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private encryptionKey = "your-secret-key";
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  constructor(private router: Router) {}
 
  authenticate(): void {
    // Assume successful authentication
    this.isAuthenticatedSubject.next(true);
    // Redirect to the navigation bar component after successful authentication
    this.router.navigate(['/']); // Navigate to the root route (AppComponent)
  }

  // Method to check if the user is authenticated
  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
  redirectAfterLogin(): void {
    // Redirect to the navigation bar component
    this.router.navigate(['/']); // Navigate to the root route (AppComponent)
  }
  setUserDetails(userDetails: UserDetails) {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(userDetails), this.encryptionKey).toString();
    sessionStorage.setItem('userDetails', encryptedData);
    sessionStorage.setItem('isLoggedIn', 'true'); // Set logged-in flag
  }
 
  getUserDetails(): any | null {
    const encryptedData = sessionStorage.getItem('userDetails');
    if (!encryptedData) return null;
    return encryptedData
 
  }
 
 
  clearUserDetails() {
    sessionStorage.removeItem('userDetails');
    sessionStorage.removeItem('isLoggedIn'); // Clear logged-in flag
  }
 
  logout() {
    this.clearUserDetails();
    this.router.navigate(['/login']); // Redirect to login after logout
  }
 
   isLoggedIn(): boolean {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true' && this.getUserDetails() !== null;
  }
 
  // New method to simulate token generation
  generateUserToken(): string {
    // Hardcoded token
    return 'temp-token-4564784493';
  }
 
  private getMenuByMenuId(menuId: number): {
    menu: EntitlementMenu | null;
    accePrev: AccessPrivileges | null;
  } {
    const userDetails = this.getUserDetails();
    if (userDetails && userDetails.entitlementDetails) {
      for (const entitlement of userDetails.entitlementDetails) {
        const foundMenu = entitlement.menuList.find(
          // (menu) => menu.menuId === menuId
        );
        if (foundMenu) {
          return { menu: foundMenu, accePrev: foundMenu.accePrev };
        }
      }
    }
    return { menu: null, accePrev: null };
  }
 
  hasMenuAccess(menuId: number): boolean {
    const { accePrev } = this.getMenuByMenuId(menuId);
 
    // Check if any privilege is true
    return accePrev
      ? accePrev.view || accePrev.edit || accePrev.newRec || accePrev.delete
      : false;
  }
 
  canView(menuId: number): boolean {
    const { accePrev } = this.getMenuByMenuId(menuId);
 
    return accePrev ? accePrev.view : false;
  }
 
  canEdit(menuId: number): boolean {
    const { accePrev } = this.getMenuByMenuId(menuId);
    return accePrev ? accePrev.edit : false;
  }
 
  canAdd(menuId: number): boolean {
    const { accePrev } = this.getMenuByMenuId(menuId);
    return accePrev ? accePrev.newRec : false;
  }
 
  canDelete(menuId: number): boolean {
    const { accePrev } = this.getMenuByMenuId(menuId);
    return accePrev ? accePrev.delete : false;
  }
  getUserId(): number | null {
    const userDetails = this.getUserDetails();
    return userDetails ? userDetails.userid : null;
  }
 
  getRoleType(): number | null {
    const userDetails = this.getUserDetails();
    return userDetails ? userDetails.roletype : null;
  }
 
  getCustId(): number | null {
    const userDetails = this.getUserDetails();
    return userDetails ? userDetails.custId : null;
  }
 
  getUserName(): string | null {
    const userDetails = this.getUserDetails();
    if (userDetails) {
      return userDetails.username;
    }
    return null;
  }
}