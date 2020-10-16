import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrganisationComponent } from 'src/app/organisation/organisation.component';
import { OrganisationFormComponent } from 'src/app/organisation/organisation-form/organisation-form.component';


@NgModule({
  declarations: [OrganisationComponent,OrganisationFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class CrudModule { }