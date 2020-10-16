import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organisation, OrganisationId } from './_models/organisation';
import { OrganisationService } from './_services/organisation.service';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {
  public organisations : any[] = [];
  public endpointPrefix = "/organisations/";
  constructor(private organisationService : OrganisationService,public router: Router){

  }
  

  ngOnInit(): void {
    this.organisationService.getOrganisations(this.endpointPrefix).subscribe( data => {
      console.log(data);
      this.organisations = data.map(e => {
        return{
        id : e.payload.doc.id,
        name : e.payload.doc.data()['name']
        }
      });
      console.log(this.organisations);
    })
  }

  deleteOrganisation(organisationId : string){
    this.organisationService.deleteOrganisation(organisationId,this.endpointPrefix)
  }


  navigateTo(navigationPrefix : string, args? : any){
    this.router.navigate([navigationPrefix,args]);
  }
}
