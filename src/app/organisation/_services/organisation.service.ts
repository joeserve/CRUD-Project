import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CrudService } from 'src/app/_utils/crud/_services/crud.service';
import { Organisation, OrganisationId, OrganisationMapper } from '../_models/organisation';

@Injectable({ providedIn: 'root' })
export class OrganisationService{

    constructor(private crudService : CrudService){}
    
    public getOrganisation(organisationId: string, endpointPrefix: string): Observable<Organisation>
    {
        return this.crudService.getById(organisationId,endpointPrefix);
    }

    public getOrganisations(endpointPrefix: string){
        return this.crudService.getAll(endpointPrefix);
    }

    public createOrganisation(organisation : Organisation, endpointPrefix: string){
        return this.crudService.create(organisation,endpointPrefix)
    }

    public updateOrganisation(organisationId: string, organisation : Organisation,endpointPrefix: string){
        return this.crudService.update(organisationId,organisation,endpointPrefix);
    }

    public deleteOrganisation(organisationId: string , endpointPrefix : string){
        return this.crudService.delete(organisationId,endpointPrefix);
    }
}