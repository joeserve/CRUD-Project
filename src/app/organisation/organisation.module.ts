import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { OrganisationFormComponent } from './organisation-form/organisation-form.component';
import { OrganisationRoutingModule } from './organisation-routing.module';
import { OrganisationComponent } from './organisation.component';

@NgModule({
    declarations: [OrganisationComponent,OrganisationFormComponent],
    exports: [OrganisationComponent,OrganisationFormComponent],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule ,
        OrganisationRoutingModule,
        BrowserModule],
        
})
export class OrganisationModule{}