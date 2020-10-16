import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/_utils/crud/_services/crud.service';
import { Organisation, OrganisationId } from '../_models/organisation';
import { OrganisationService } from '../_services/organisation.service';


@Component({
  selector: 'app-organisation-form',
  templateUrl: './organisation-form.component.html',
  styleUrls: ['./organisation-form.component.css']
})
export class OrganisationFormComponent implements OnInit {

  public organisationId : string
  public organisationForm: FormGroup;
  public endpointPrefix = "/organisations/";
  
  public name : string;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public organisationService: OrganisationService,
    public crudService : CrudService
  ){ 
    this.organisationId = this.route.snapshot.paramMap.get('organisationId');
  }

  ngOnInit() {
     this.createForm();
     this.assignOrganisation();
  }

  createForm(){
    this.organisationForm = this.fb.group({
      name: [null]   
    })
  }

  onSubmit() {
    this.organisationId ? this.organisationService.updateOrganisation(this.organisationId,this.organisationForm.value,this.endpointPrefix) : this.organisationService.createOrganisation(this.organisationForm.value,this.endpointPrefix);
  }

  private assignOrganisation(){
    if(this.organisationId){
      this.organisationService.getOrganisation(this.organisationId,this.endpointPrefix).subscribe( organisation => {
        this.organisationForm.patchValue(organisation)
      })
    }
  }

}
