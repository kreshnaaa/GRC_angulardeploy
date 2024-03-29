import { NgModule } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routes } from "../../app.routes";
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@NgModule({
    declarations: [BreadcrumbComponent],
    imports: [
        CommonModule,
        HttpClient,
        ReactiveFormsModule,
        FormsModule,
        
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        BreadcrumbComponent
        
    ],

})
export class SharedModule {}