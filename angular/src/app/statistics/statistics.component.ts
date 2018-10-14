import { Component, Input } from '@angular/core';
import * as $ from 'jquery';
import { Location } from 'app/offers/model/location';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Statics } from 'app/offers/model/Statics';
import { TravelService } from 'app/offers/shared/travel.service';
declare var jQuery: any;
@Component({
	selector: 'statistics-request',
	templateUrl: './statistics.component.html'
})
export class StatisticsComponent {

	staticsObj: Statics;
	constructor(public travelService: TravelService) { };

	getStatics() {
		jQuery('#spinner').show();
		this.travelService.getStatics().subscribe((item) => {

			this.staticsObj = item;

			jQuery('#spinner').hide();
		},
			err => {
				jQuery('#spinner').hide();
				alert('Error in search');
			});


	}
}
