import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { AuthToken } from 'app/offers/model/authToken';
import { Location } from 'app/offers/model/location';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map'


@Injectable()
export class TravelService {

	constructor(private http: Http) { }

	getLocations() {
		const url = '/travel/airports';
		return this.http.get(url).map((res: any) => res.json());
	}

	getFares(originCode: string, destinationCode: string) {

		const url = '/travel/fares/' + originCode + '/' + destinationCode;

		return this.http.get(url).map((res: any) => res.json());
	}

	getStatics() {

		const url = environment.acuratorUrl + 'statics';

		return this.http.get(url).map((res: any) => res.json());
	}





















}

