export interface Customer {
    customerId:number;
    customerCompanyName:string;
    customerAddress: string;
    customerDescription:string;
    customerOnBoardingDate:string;
    customerContractPeriod:string;
    customerRenewalDate:string;
    customerEndDate:string;
    customerEmailId:string;
    customerPhoneNumber:string;
    customerState:string;
    customerCity:string;
    customerCountryOfOperation:string;
    customerCode:string;
    customerGovernanceCompilance:string;
    customerDocumentsUpload:string;
    customername:string;
    [key: string]: string | boolean | number;

}