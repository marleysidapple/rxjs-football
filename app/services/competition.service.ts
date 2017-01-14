import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 


import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/switchMap';


@Injectable()


export class CompetitionService {

	private url: string = 'http://api.football-data.org/v1';

	constructor(private _http: Http) { }

	/*
return this.http.get(`/books/${bookId}`).map(res => res.json())
      .flatMap((book) => {
        return this.http.get(`/editors/${book.editor.id}`).map(res => res.json());
      });
}*/


	getAllCompetition(){
		let headers = new Headers({ 'X-Auth-Token': '932e2b26e9cc4e789141aec6d2eef0a1' });
		headers.append('X-Response-Control', 'full');

		let options = new RequestOptions({ headers: headers });

		return this._http.get(this.url + '/competitions/', options)
			.map((res: Response) => res.json()).publishLast().refCount() // ...and calling .json() on the response to return data
			.catch((error: any) => Observable.throw(error.json().error || 'Server error')).share();
	}



	getCompetitionDetail(id: number){
		let headers = new Headers({ 'X-Auth-Token': '932e2b26e9cc4e789141aec6d2eef0a1' });
		headers.append('X-Response-Control', 'full');

		let options = new RequestOptions({ headers: headers });

		// return this._http.get(this.url + '/competitions/' + 426, options).map(res => res.json())
		// 						.flatMap((table) => {
		// 							return this.getLeagueTable();
		// 						});

		
			return this._http.get(this.url + '/competitions/' + id, options).map(res => res.json())
									.flatMap((tbl) => {
										return Observable.forkJoin([
												 this.getUpComingFixture(id),
												 this.getLeagueStanding(id),
												 this.getTeamsForCompetition(id),
											]);
										
									});
				



		// return this._http.get(this.url + '/competitions/' + 426, options)
		// 	.map((res: Response) => res.json()).flatMap(team) => {
		// 		return this.getTeamDetail(tema.id)
		// 	});
	}


	getUpComingFixture(id: number){
		let headers = new Headers({ 'X-Auth-Token': '932e2b26e9cc4e789141aec6d2eef0a1' });
		headers.append('X-Response-Control', 'full');

		let options = new RequestOptions({ headers: headers });

		return this._http.get(this.url + '/competitions/' + id + '/fixtures?timeFrame=n10', options)
			.map((res: Response) => res.json()).publishLast().refCount() // ...and calling .json() on the response to return data
			.catch((error: any) => Observable.throw(error.json().error || 'Server error')).share();


	}


	getTeamsForCompetition(id: number){
		let headers = new Headers({ 'X-Auth-Token': '932e2b26e9cc4e789141aec6d2eef0a1' });
		headers.append('X-Response-Control', 'full');

		let options = new RequestOptions({ headers: headers });

		return this._http.get(this.url + '/competitions/' + id + '/teams', options)
			.map((res: Response) => res.json()).publishLast().refCount() // ...and calling .json() on the response to return data
			.catch((error: any) => Observable.throw(error.json().error || 'Server error')).share();
	}

	getLeagueStanding(id: number){
		let headers = new Headers({ 'X-Auth-Token': '932e2b26e9cc4e789141aec6d2eef0a1' });
		headers.append('X-Response-Control', 'full');

		let options = new RequestOptions({ headers: headers });

		return this._http.get(this.url + '/competitions/' + id + '/leagueTable', options)
			.map((res: Response) => res.json()).publishLast().refCount() // ...and calling .json() on the response to return data
			.catch((error: any) => Observable.throw(error.json().error || 'Server error')).share();
	}

}