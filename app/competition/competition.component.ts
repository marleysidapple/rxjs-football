import { Component, Pipe, PipeTransform } from '@angular/core';
import { CompetitionService } from './../services/competition.service';
import { ExplodePipe } from './../pipes/explode.pipe';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	providers: [ExplodePipe],
	templateUrl: './competition.html'

})

@Pipe({
	name: 'explode'
})





export class CompetitionComponent {


	private allfixtures: any;
	private standing: any;
	private competingTeams: any;
	private fixtureId: any;

	constructor(private _competitionService: CompetitionService, private _route: ActivatedRoute, private _pipe: ExplodePipe) { }


	ngOnInit(): void {
		this._route.params.subscribe((params: Params) => {
			this.detailsofSelectedCompetition(params['id']);
			setInterval(() => this.detailsofSelectedCompetition(params['id']), 20000);
		});
	}



	detailsofSelectedCompetition(id: number) {
		this._competitionService.getCompetitionDetail(id).subscribe(
			(result) => {
				this.allfixtures = result[0];
				this.standing = result[1].standing;
				this.competingTeams = result[2];

			},

			err => {
				console.log('error');
			},

			() => { }
		)


	}


	fullFixtureDetail(event: any){
	 console.log(event.target.id);
	}




}


