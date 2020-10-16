import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from './_services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  private organisationId : string
  public teams : any[] = [];
  public endpointPrefix = "/teams/";
  
  constructor(private teamService : TeamService,public router: Router,private route: ActivatedRoute){
    this.organisationId = this.route.snapshot.paramMap.get('organisationId');
  }
  

  ngOnInit(): void {
    this.teamService.getTeams(this.endpointPrefix).subscribe( data => {
      console.log(data);
      this.teams = data.map(e => {
        return{
        id : e.payload.doc.id,
        name : e.payload.doc.data()['name']
        }
      });
      console.log(this.teams);
    })
  }

  deleteTeam(teamId : string){
    this.teamService.deleteTeam(teamId,this.endpointPrefix)
  }

  navigateTo(navigationPrefix : string, args? : any){
    const baseUri = "/organisation/" + this.organisationId
    this.router.navigate([baseUri,navigationPrefix,args]);
  }

}
