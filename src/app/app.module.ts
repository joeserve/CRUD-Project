import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FleetComponent } from './fleet/fleet.component';
import { UnitComponent } from './unit/unit.component';
import { AgentComponent } from './agent/agent.component';
import { HomeComponent } from './home/home.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { TeamComponent } from './organisation/team/team.component';
import { StaffComponent } from './organisation/team/staff/staff.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { appRoutingModule } from './app.routing';
import { OrganisationService } from './organisation/_services/organisation.service';
import { RouterModule } from '@angular/router';
import { environment } from "src/environments/environment";
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { TeamService } from './organisation/team/_services/team.service';
import { OrganisationFormComponent } from './organisation/organisation-form/organisation-form.component';
import { TeamFormComponent } from './organisation/team/team-form/team-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FleetComponent,
    UnitComponent,
    AgentComponent,
    HomeComponent,
    TeamComponent,
    StaffComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    appRoutingModule,
    
  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider,
        OrganisationService,
        TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
