import { Component } from '@angular/core';
import { CompetitionService } from './../services/competition.service';

@Component({
	moduleId: module.id,
	selector: 'my-header',
	templateUrl: './header.html'

})

export class HeaderComponent {

	public isOpen: boolean = false;
	private competitionListing : Object;

	ngOnInit(){
		this.competitionList();
	}
	

	constructor(private _competitionService : CompetitionService) { }

	

	competitionList(){
		this._competitionService.getAllCompetition().subscribe(
			(result) => {
				if (result){
					this.competitionListing = result;
				}
			},
			err => {

			},

			() => { }
		);
	}


	showall() {
		if (this.isOpen === false) {
			this.isOpen = true;
		} else {
			this.isOpen = false;
		}
	}

}