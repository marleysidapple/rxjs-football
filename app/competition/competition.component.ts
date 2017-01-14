import { Component } from '@angular/core';
import { CompetitionService } from './../services/competition.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	moduleId: module.id,
	selector : 'my-app',
	templateUrl: './competition.html'

})



export class CompetitionComponent {


	private allfixtures : any;
	private standing: any;
	private competingTeams: any;

	constructor(private _competitionService : CompetitionService, private _route : ActivatedRoute) { }


	ngOnInit() : void{
		this._route.params.subscribe((params: Params) => {
			this.detailsofSelectedCompetition(params['id']);
		});
	}



	detailsofSelectedCompetition(id : number){
		this._competitionService.getCompetitionDetail(id).subscribe(
			(result) => {
				this.allfixtures = result[0];
				this.standing = result[1].standing;
				this.competingTeams = result[2];
				
			},

			err => {
				console.log('error');
			}, 

			() => {}
	)}
}

	
