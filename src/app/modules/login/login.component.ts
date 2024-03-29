import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,FormsModule,Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginService } from './service/login.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.services';
import { Subject } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  activeTab = 'login';
  passwordVisible: boolean = false;
  mfaForm!:FormGroup;
  showLoginForm: boolean = true;
  showmfa: boolean = false;
  code: any;
  menuIds: number[] | undefined;
  userId!:any;
  sysRoleid:any;
  message: any;
  routerLink!: string;
  roleId: any;
  rememberMe = false;
  // isLoggedIn: boolean = false;
 
  constructor(
    private fb: FormBuilder,
    private loginservice: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private cdRef: ChangeDetectorRef
     // private toastr: ToastrService
  ){
    
    this.loginForm = this.fb.group({
      email: ['', Validators.required,Validators.email],
      password:new FormControl ('', Validators.required),
      // mfa: ['',Validators.required],
    });
    this.mfaForm = this.fb.group({
      // userId:['',[Validators.required,]],
      mfa: ['',Validators.required],

    });
 
 
  }
  handleAuthentication(): void {
    // Authenticate the user (replace with actual logic)
    this.authService.authenticate();
    this.authService.redirectAfterLogin();
  }
  togglePasswordVisibility() {
   
    this.passwordVisible = !this.passwordVisible;
    const pwInput = document.getElementById('pw') as HTMLInputElement;
    pwInput.type = this.passwordVisible ? 'text' : 'password';
  }
  ngOnInit(): void {
    // Initialize other necessary components
    this.route.paramMap.subscribe(params =>{
      const uid = params.get('UID');
      console.log('Uid:',);
    });
    
  }
  submit(): void {

    console.log('SignIn Data:',JSON.stringify(this.loginForm.value,null,1))
    // debugger
    Object.keys(this.loginForm.controls).forEach((field)=>{
      const control = this.loginForm.get(field);
      if (control){
        control.markAsTouched({onlySelf : true});
      }
    });
    const loginDetails=
    {
      email: this.loginForm.value.email,
      password:this.loginForm.value.password,
  }
 
  this.loginservice.addlogin(loginDetails)
  .subscribe(
    (response: any) => { // Use 'any' type if the structure of response is not defined
      debugger
     
        this.showmfa = !this.showmfa
        this.showLoginForm = !this.showLoginForm
      
      if (response.hasOwnProperty('userid')) {
        // Store the entire response in session storage
        sessionStorage.setItem('userDetails', JSON.stringify(response));
        this.userId = response.userid;
        // this.sysRoleid = response.sysRoleid;

        sessionStorage.setItem('userDetails', this.userId);
        // sessionStorage.setItem('userDetails',this.sysRoleid);
      } else {
        console.error('Error: Response does not contain userid property');
      }
      

    },
    (error) => {
      console.error('Error posting data', error);
    }
  );
  }


 
mfaSubmit(): void {
   
  Object.keys(this.loginForm.controls).forEach((field) => {
    const control = this.loginForm.get(field);
    if (control) {
      control.markAsTouched({ onlySelf: true });
    }
  });
  this.userId = this.authService.getUserDetails();
 
  const loginDetails = {
    userid: Number(this.userId),
    code: this.mfaForm.value.mfa,
  };

  this.loginservice.addmfa(loginDetails)
    .subscribe(
      (response) => {
        console.log("MFA Post successful", response);
        sessionStorage.setItem('userDetails', JSON.stringify(response));
        console.log("Navigating to /nav");
        // Here we navigate after receiving the response from the service
        window.location.href = '/';
      },
      (error) => {
        console.error('Error posting data', error);
      }
    );
}
}

function handleAuthentication() {
  throw new Error('Function not implemented.');
}

