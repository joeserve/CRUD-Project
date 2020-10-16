import { Team } from '../team/_models/team';
import { OrganisationStatusType } from '../_constants/organisation-status.enum';

export type OrganisationId = string;
export interface Organisation{
    id: OrganisationId,
    name: string,
    status?: OrganisationStatus
    teams: Team[]
} 

export interface OrganisationStatus{
    type? : OrganisationStatusType,
    title? : string,
    text? : string
}

export class OrganisationMapper{
    static map(data : any): Organisation{
        if(!data) return;
        
        return {
            id: data.id,
            name: data.name,
            teams: data.teams
        }
    }

    static arrayMap(data: any): any {
        if (Array.isArray(data)) return;

        return data.map(OrganisationMapper.map)
        
    }
}