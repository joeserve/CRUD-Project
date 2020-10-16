import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganisationFormComponent } from './organisation-form/organisation-form.component';
import { OrganisationComponent } from "./organisation.component";

const routes: Routes = [
    {
      path: '',
      component: OrganisationComponent
    },
    {
        path: 'add-organisation',
        component: OrganisationFormComponent
    },
    {
        path: ':organisationId',
        component: OrganisationFormComponent
    },
    { 
         path: ':organisationId/teams', loadChildren: () => import('./team/team-routing.module').then(m => m.TeamRoutingModule) 
    },

];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrganisationRoutingModule {}