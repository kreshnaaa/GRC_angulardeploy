import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ClientManagementComponent } from './modules/client-management/client-management/client-management.component';
import { KnowledgeManagementComponent } from './modules/knowledge-management/knowledge-management/knowledge-management.component';
import { TicketingSystemComponent } from './modules/ticketing-system/ticketing-system/ticketing-system.component';
import { TrainingModulesComponent } from './modules/training-modules/training-modules/training-modules.component';
import { HelpContentComponent } from './modules/help-content/help-content/help-content.component';
import { ProspectsManagementComponent } from './modules/prospects-management/prospects-management/prospects-management.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { ClientOnboardingComponent } from './modules/client-management/components/client-onboarding/client-onboarding.component';
import { ClientOffboardingComponent } from './modules/client-management/components/client-offboarding/client-offboarding.component';
import { LicenseManagementComponent } from './modules/client-management/components/license-management/license-management.component';
import { PaymentsComponent } from './modules/client-management/components/payments/payments.component';
import { ReportsComponent } from './modules/client-management/components/reports/reports.component';
import { CybersecurityComponent } from './modules/knowledge-management/components/cybersecurity/cybersecurity.component';
import { BusinessContinuityComponent } from './modules/knowledge-management/components/business-continuity/business-continuity.component';
import { QualityComponent } from './modules/knowledge-management/components/quality/quality.component';
import { HealthComponent } from './modules/knowledge-management/components/healthandsecurity/health.component';
import { PrivacyComponent } from './modules/knowledge-management/components/privacy/privacy.component';
import { CloudComponent } from './modules/knowledge-management/components/cloud/cloud.component';
import { DataComponent } from './modules/knowledge-management/components/data/data.component';
import { BuildInternallyComponent } from './modules/ticketing-system/build-internally/build-internally.component';
import { ClientSetupComponent } from './modules/training-modules/components/client-setup/client-setup.component';
import { TrainingContentforManagingtheclientportalComponent } from './modules/training-modules/components/training-contentfor-managingtheclientportal/training-contentfor-managingtheclientportal.component';
import { ListofURLfortheabovegovernanceareasComponent } from './modules/help-content/listof-urlfortheabovegovernanceareas/listof-urlfortheabovegovernanceareas.component';
import { CRMComponent } from './modules/prospects-management/crm/crm.component';
import { ISO27KComponent } from './modules/knowledge-management/components/cybersecurity/iso27-k/iso27-k.component';
import { ISO31KComponent } from './modules/knowledge-management/components/cybersecurity/iso31-k/iso31-k.component';
import { ARAMCOComponent } from './modules/knowledge-management/components/cybersecurity/aramco/aramco.component';
import { SAMACSFComponent } from './modules/knowledge-management/components/cybersecurity/samacsf/samacsf.component';
import { NCAECCComponent } from './modules/knowledge-management/components/cybersecurity/ncaecc/ncaecc.component';
import { CTICComponent } from './modules/knowledge-management/components/cybersecurity/ctic/ctic.component';
import { CTIComponent } from './modules/knowledge-management/components/cybersecurity/cti/cti.component';
import { PCIDSSIComponent } from './modules/knowledge-management/components/cybersecurity/pcidssi/pcidssi.component';
import { SAMABCMComponent } from './modules/knowledge-management/components/business-continuity/components/samabcm/samabcm.component';
import { ISO9000Component } from './modules/knowledge-management/components/quality/iso9000/iso9000.component';
import { ISO14KComponent } from './modules/knowledge-management/components/healthandsecurity/iso14-k/iso14-k.component';
import { ISO27701Component } from './modules/knowledge-management/components/privacy/components/iso27701/iso27701.component';
import { CSTARComponent } from './modules/knowledge-management/components/cloud/components/cstar/cstar.component';
import { ISO18001Component } from './modules/knowledge-management/components/privacy/components/iso18001/iso18001.component';
import { ISO7001Component } from './modules/knowledge-management/components/cloud/components/iso17001/iso7001.component';
import { BCM22301Component } from './modules/knowledge-management/components/business-continuity/components/bcm22301/bcm22301.component';
import { MastersComponent } from './modules/masters/masters.component';
import { RoleComponent } from './modules/masters/components/role/role.component';
import { UserComponent } from './modules/masters/components/user/user.component';
import { ActivityComponent } from './modules/masters/components/activity/activity.component';
import { AssignmentComponent } from './modules/masters/components/assignment/assignment.component';
import { ClientAdminNavbarComponent } from './modules/client-admin-navbar/client-admin-navbar.component';
import { ClientuserNavbarComponent } from './modules/clientuser-navbar/clientuser-navbar.component';
import { LoginComponent } from './modules/login/login.component';
import { ActivityManagementComponent } from './modules/activity-management/activity-management.component';
import { ConfigurationComponent } from './modules/configuration/configuration.component';
import { ModulesComponent } from './modules/modules/modules.component';
import { IntialSetupComponent } from './modules/configuration/components/intial-setup/intial-setup.component';
import { CompliancePeriodsComponent } from './modules/configuration/components/compliance-periods/compliance-periods.component';
import { AssetManagementComponent } from './modules/modules/components/asset-management/asset-management.component';
import { RiskManagementComponent } from './modules/modules/components/risk-management/risk-management.component';
import { BusinessImpactAnalysisComponent } from './modules/modules/components/business-impact-analysis/business-impact-analysis.component';
import { MetricsComponent } from './modules/modules/components/metrics/metrics.component';
import { KriandkpiComponent } from './modules/modules/components/kriandkpi/kriandkpi.component';
import { DashboardsComponent } from './modules/client-management/components/reports/components/dashboards/dashboards.component';
import { StatusreportComponent } from './modules/client-management/components/reports/components/statusreport/statusreport.component';
import { UserreportComponent } from './modules/client-management/components/reports/components/userreport/userreport.component';
import { GapreportComponent } from './modules/client-management/components/reports/components/gapreport/gapreport.component';
import { InternalauditreportComponent } from './modules/client-management/components/reports/components/internalauditreport/internalauditreport.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
export class UserDetails {
  username!: string;
  userid!: number;
  custId!: number;
  roleId!: number;
  isClientAdmin!: boolean;
  isSystemAdmin!: boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink,NavbarComponent, LoginComponent, ClientManagementComponent, ClientOnboardingComponent, ClientOffboardingComponent, LicenseManagementComponent, PaymentsComponent, ReportsComponent, KnowledgeManagementComponent, CybersecurityComponent, ISO27KComponent, ISO31KComponent, ARAMCOComponent, SAMACSFComponent, NCAECCComponent, CTICComponent, CTIComponent, PCIDSSIComponent, BusinessContinuityComponent, BCM22301Component, SAMABCMComponent, QualityComponent, ISO9000Component, HealthComponent, ISO14KComponent, PrivacyComponent, ISO27701Component, ISO18001Component, CloudComponent, ISO7001Component, CSTARComponent, DataComponent, TicketingSystemComponent, BuildInternallyComponent, TrainingModulesComponent, ClientSetupComponent, TrainingContentforManagingtheclientportalComponent, HelpContentComponent, ListofURLfortheabovegovernanceareasComponent, ProspectsManagementComponent, CRMComponent, MastersComponent, RoleComponent, UserComponent,ActivityComponent, AssignmentComponent, ClientAdminNavbarComponent, ActivityManagementComponent, ConfigurationComponent, IntialSetupComponent, CompliancePeriodsComponent, ModulesComponent, AssetManagementComponent, RiskManagementComponent, BusinessImpactAnalysisComponent, MetricsComponent, KriandkpiComponent, DashboardsComponent, StatusreportComponent, UserreportComponent, GapreportComponent, InternalauditreportComponent, ClientuserNavbarComponent,BreadcrumbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'GRC';
  router: any;
  userid: number = 0;
  roleId!: number;
  isClientAdmin!: boolean;
  isSystemAdmin!: boolean;
  // dataSubscription: any;
  // userdata!: string | null;

  constructor(private httpClient: HttpClient) {

  } // Example usage of HttpClient
  ngOnDestroy(): void {
    
}
  ngOnInit(): void {
    let userdata!: string | null
    this.userid=0;
    debugger
    userdata = sessionStorage.getItem('userDetails');
    // const userObject = JSON.parse(userdata);
    // Assuming userdata is of type string | null

    if (userdata !== null) {
      const userObject = JSON.parse(userdata);
      const userDetails = new UserDetails();
      userDetails.userid = userObject.userId;
      debugger
      // userDetails.custId = userObject.custId; 
      userDetails.roleId = userObject.sysRoleid; 
      userDetails.isClientAdmin = userObject.isClientAdmin;
      userDetails.isSystemAdmin = userObject.isSystemAdmin;


      this.userid = userDetails.userid
      this.roleId= userDetails.roleId
      this.isClientAdmin= userDetails.isClientAdmin
      this.isSystemAdmin=  userDetails.isSystemAdmin

      // Now you can proceed with parsing the JSON object
      console.log(userObject);
      console.log("this.user", userObject.userid);

    } else {
      // Handle the case where userdata is null, depending on your requirements
      console.error('userdata is null. Unable to parse JSON.');
    }
    console.log("this.userid", userdata)
  }
logout(){
  debugger
  sessionStorage.removeItem('userDetails');
   this.userid=0;
}

}

