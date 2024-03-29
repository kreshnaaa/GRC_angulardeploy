import { Routes } from '@angular/router';
import { ClientManagementComponent } from './modules/client-management/client-management/client-management.component';
import { KnowledgeManagementComponent } from './modules/knowledge-management/knowledge-management/knowledge-management.component';
import { ProspectsManagementComponent } from './modules/prospects-management/prospects-management/prospects-management.component';
import { HelpContentComponent } from './modules/help-content/help-content/help-content.component';
import { TicketingSystemComponent } from './modules/ticketing-system/ticketing-system/ticketing-system.component';
import { TrainingModulesComponent } from './modules/training-modules/training-modules/training-modules.component';
import { ClientOnboardingComponent } from './modules/client-management/components/client-onboarding/client-onboarding.component';
import { LicenseManagementComponent } from './modules/client-management/components/license-management/license-management.component';
import { ClientOffboardingComponent } from './modules/client-management/components/client-offboarding/client-offboarding.component';
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
import { NavbarComponent } from './modules/navbar/navbar.component';
import { ISO7001Component } from './modules/knowledge-management/components/cloud/components/iso17001/iso7001.component';
import { CSTARComponent } from './modules/knowledge-management/components/cloud/components/cstar/cstar.component';
import { ISO27701Component } from './modules/knowledge-management/components/privacy/components/iso27701/iso27701.component';
import { ISO18001Component } from './modules/knowledge-management/components/privacy/components/iso18001/iso18001.component';
import { ISO14KComponent } from './modules/knowledge-management/components/healthandsecurity/iso14-k/iso14-k.component';
import { ISO9000Component } from './modules/knowledge-management/components/quality/iso9000/iso9000.component';
import { BCM22301Component } from './modules/knowledge-management/components/business-continuity/components/bcm22301/bcm22301.component';
import { SAMABCMComponent } from './modules/knowledge-management/components/business-continuity/components/samabcm/samabcm.component';
import { PCIDSSIComponent } from './modules/knowledge-management/components/cybersecurity/pcidssi/pcidssi.component';
import { CTIComponent } from './modules/knowledge-management/components/cybersecurity/cti/cti.component';
import { NCAECCComponent } from './modules/knowledge-management/components/cybersecurity/ncaecc/ncaecc.component';
import { SAMACSFComponent } from './modules/knowledge-management/components/cybersecurity/samacsf/samacsf.component';
import { ARAMCOComponent } from './modules/knowledge-management/components/cybersecurity/aramco/aramco.component';
import { ISO31KComponent } from './modules/knowledge-management/components/cybersecurity/iso31-k/iso31-k.component';
import { ISO27KComponent } from './modules/knowledge-management/components/cybersecurity/iso27-k/iso27-k.component';
import { MastersComponent } from './modules/masters/masters.component';
import { RoleComponent } from './modules/masters/components/role/role.component';
import { UserComponent } from './modules/masters/components/user/user.component';
import { ActivityComponent } from './modules/masters/components/activity/activity.component';
import { AssignmentComponent } from './modules/masters/components/assignment/assignment.component';
import { ClientAdminNavbarComponent } from './modules/client-admin-navbar/client-admin-navbar.component';
import { ClientuserNavbarComponent } from './modules/clientuser-navbar/clientuser-navbar.component';
import { ActivityManagementComponent } from './modules/activity-management/activity-management.component';
import { ConfigurationComponent } from './modules/configuration/configuration.component';
import { InternalauditreportComponent } from './modules/client-management/components/reports/components/internalauditreport/internalauditreport.component';
import { GapreportComponent } from './modules/client-management/components/reports/components/gapreport/gapreport.component';
import { UserreportComponent } from './modules/client-management/components/reports/components/userreport/userreport.component';
import { StatusreportComponent } from './modules/client-management/components/reports/components/statusreport/statusreport.component';
import { DashboardsComponent } from './modules/client-management/components/reports/components/dashboards/dashboards.component';
import { KriandkpiComponent } from './modules/modules/components/kriandkpi/kriandkpi.component';
import { MetricsComponent } from './modules/modules/components/metrics/metrics.component';
import { RiskManagementComponent } from './modules/modules/components/risk-management/risk-management.component';
import { AssetManagementComponent } from './modules/modules/components/asset-management/asset-management.component';
import { CompliancePeriodsComponent } from './modules/configuration/components/compliance-periods/compliance-periods.component';
import { IntialSetupComponent } from './modules/configuration/components/intial-setup/intial-setup.component';
import { LoginComponent } from './modules/login/login.component';
import { ModulesComponent } from './modules/modules/modules.component';
import { BusinessImpactAnalysisComponent } from './modules/modules/components/business-impact-analysis/business-impact-analysis.component';
export const routes: Routes = [
    { path: 'login',  component: LoginComponent },

    { path: 'client',  component: ClientManagementComponent },
    { path: 'onboarding',  component: ClientOnboardingComponent },
    { path: 'license', component: LicenseManagementComponent },
    { path: 'offboarding',  component: ClientOffboardingComponent },
    { path: 'payments',  component: PaymentsComponent },
    { path: 'reports',  component: ReportsComponent },
    { path: 'knowledge',  component: KnowledgeManagementComponent },
    { path: 'cybersecurity',  component: CybersecurityComponent },
    { path: 'iso27k',  component: ISO27KComponent },
    { path: 'iso31k',  component: ISO31KComponent },
    { path: 'aramco',  component: ARAMCOComponent },
    { path: 'samacsf',  component: SAMACSFComponent },
    { path: 'ncaecc',  component: NCAECCComponent },
    { path: 'ctic',  component: CTIComponent },
    { path: 'cti',  component: CTIComponent },
    { path: 'pcidss',  component: PCIDSSIComponent },
    { path: 'business',  component: BusinessContinuityComponent },
    { path: 'bcm22301',  component: BCM22301Component },
    { path: 'samabcm',  component: SAMABCMComponent },
    { path: 'quality',  component: QualityComponent },
    { path: 'iso9000',  component: ISO9000Component },
    { path: 'health', component: HealthComponent },
    { path: 'iso14K',  component: ISO14KComponent },
    { path: 'privacy',  component: PrivacyComponent },
    { path: 'iso27701',  component: ISO27701Component },
    { path: 'iso18001',  component: ISO18001Component },
    { path: 'cloud',  component: CloudComponent },
    { path: 'iso17001', component: ISO7001Component },
    { path: 'cstar',  component: CSTARComponent },
    { path: 'data',  component: DataComponent },
    { path: 'ticketing',  component: TicketingSystemComponent },
    { path: 'build',  component: BuildInternallyComponent },
    { path: 'training',  component: TrainingModulesComponent },
    { path: 'ClientSetup', component: ClientSetupComponent },
    {
        path: 'clientportal',
        component: TrainingContentforManagingtheclientportalComponent
    },
    { path: 'help', component: HelpContentComponent },
    { path: 'url',  component: ListofURLfortheabovegovernanceareasComponent },
    { path: 'prospects',  component: ProspectsManagementComponent },
    { path: 'CRM',  component: CRMComponent },
    { path: 'master', component: MastersComponent },
    { path: 'role',  component: RoleComponent },
    { path: 'user',  component: UserComponent },
    { path: 'active',  component: ActivityComponent },
    { path: 'assign',  component: AssignmentComponent },
    { path: 'activitymanagement',  component: ActivityManagementComponent },
    { path: 'config',  component: ConfigurationComponent },
    { path: 'initial',  component:IntialSetupComponent},
    { path: 'compliance',  component: CompliancePeriodsComponent },
    { path: 'module',  component: ModulesComponent},
    { path: 'businessimpact',  component: BusinessImpactAnalysisComponent},

    { path: 'asset',  component: AssetManagementComponent },
    { path: 'risk',  component: RiskManagementComponent },
    { path: 'metrics',  component: MetricsComponent },
    { path: 'kriandkpi',  component: KriandkpiComponent},
    { path: 'dash',  component: DashboardsComponent },
    { path: 'status',  component: StatusreportComponent },
    { path: 'userreport',  component: UserreportComponent},
    { path: 'gap',  component: GapreportComponent },
    { path: 'internalaudit',  component: InternalauditreportComponent },


    { path: 'nav',  component: NavbarComponent ,
    },
    { path: 'clientadmin', component: ClientAdminNavbarComponent, 
    },

    { path: 'clientuser', component: ClientuserNavbarComponent }

]
