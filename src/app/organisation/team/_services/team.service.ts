import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CrudService } from 'src/app/_utils/crud/_services/crud.service';
import { Team, TeamId } from '../_models/team';

@Injectable({ providedIn: 'root' })
export class TeamService{

    constructor(private crudService : CrudService){}
    
    public getTeam(teamId: string, endpointPrefix: string): Observable<Team>
    {
        return this.crudService.getById(teamId,endpointPrefix);
    }

    public getTeams(endpointPrefix: string){
        return this.crudService.getAll(endpointPrefix);
    }

    public createTeam(team : Team, endpointPrefix: string){
        console.log(team,endpointPrefix)
        return this.crudService.create(team,endpointPrefix)
    }

    public updateTeam(teamId: string, team : Team,endpointPrefix: string){
        return this.crudService.update(teamId,team,endpointPrefix);
    }

    public deleteTeam(teamId: string , endpointPrefix : string){
        return this.crudService.delete(teamId,endpointPrefix);
    }
}