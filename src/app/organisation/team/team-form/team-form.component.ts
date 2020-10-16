import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/_utils/crud/_services/crud.service';
import { TeamService } from '../_services/team.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {

  public teamId : string
  public teamForm: FormGroup;
  public endpointPrefix = "/teams/";
  
  public name : string;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public teamService: TeamService,
    public crudService : CrudService
  ){ 
    this.teamId = this.route.snapshot.paramMap.get('teamId');
  }

  ngOnInit() {
     this.createForm();
     this.assignTeam();
  }

  createForm(){
    this.teamForm = this.fb.group({
      name: ['', [Validators.required]]   
    })
  }

  onSubmit() {
    this.teamId ? this.teamService.updateTeam(this.teamId,this.teamForm.value,this.endpointPrefix) : this.teamService.createTeam(this.teamForm.value,this.endpointPrefix);
  }

  private assignTeam(){
    if(this.teamId){
      this.teamService.getTeam(this.teamId,this.endpointPrefix).subscribe( team => {
        this.teamForm.patchValue(team)
      })
    }
  }

}
