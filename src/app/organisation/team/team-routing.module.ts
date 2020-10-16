import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamFormComponent } from './team-form/team-form.component';
import { TeamComponent } from "./team.component";

const routes: Routes = [
    {
      path: '',
      component: TeamComponent
    },
    {
        path: 'add-team',
        component: TeamFormComponent
    },
    {
        path: ':teamId',
        component: TeamFormComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TeamRoutingModule {}