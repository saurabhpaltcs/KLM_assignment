import { Component, Input } from '@angular/core';
import * as $ from 'jquery';
import { Location } from 'app/offers/model/location';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthToken } from 'app/offers/model/authToken';
import { TravelService } from 'app/offers/shared/travel.service';
declare var jQuery: any;
@Component({
    selector: 'offers-root',
    templateUrl: './offers.component.html'
})
export class OffersComponent {
    displayCheck: boolean = false;
    farePrice: number = 0.0;
    farePriceCurrency: string = '';
    destinationPlace: string = '';
    sourcePlace: string = '';
    field1: any;
    field2: any;
    locations: Array<Location>;
    accessTokenObj: AuthToken;

    constructor(public travelService: TravelService) { };

    ngOnInit() {

    }

    ngAfterViewInit() {
        jQuery('#spinner').show();
        this.travelService.getLocations().subscribe((states) => {
            console.log(states._embedded.locations);
            this.locations = states._embedded.locations;
            jQuery('#spinner').hide();
            console.log(this.locations);
            this.field1 = jQuery('#field1');
            this.field1.typeaheadMulti({
                order: "desc",
                minLength: 0,
                searchOnFocus: true,
                source: {
                    data: this.locations
                },
                templateValue: "{{name}}",
                template: '<span>{{name}} - {{code}}</span>',
                display: ["name", "code"],
                emptyTemplate: "No data",
                callback: {
                    onInit: function (node) {
                        console.log('Typeahead Initiated on ' + node.selector);
                    },
                    onClickAfter: (node, a, item, event) => {
                        this.sourcePlace = item.code;
                    }
                }
            });

            this.field2 = jQuery('#field2');
            this.field2.typeaheadMulti({
                order: "desc",
                minLength: 0,
                searchOnFocus: true,
                source: {
                    data: this.locations
                },
                templateValue: "{{name}}",
                template: '<span>{{name}} - {{code}}</span>',
                display: ["name", "code"],
                emptyTemplate: "No data",
                callback: {
                    onInit: function (node) {
                        console.log('Typeahead Initiated on ' + node.selector);
                    },
                    onClickAfter: (node, a, item, event) => {
                        this.destinationPlace = item.code;
                    }
                }
            });
        });
    }

    onSearch(value) {

	if(!this.sourcePlace || this.sourcePlace=="") {alert("Please provide origin"); return;}
	else if(!this.destinationPlace || this.destinationPlace=="") {alert("Please provide destinnation");return;}
	
        jQuery('#spinner').show();
        this.travelService.getFares(this.sourcePlace, this.destinationPlace).subscribe((item) => {
            this.displayCheck = true;
            this.farePrice = item.amount;
            this.farePriceCurrency = item.currency;
            jQuery('#spinner').hide();
        },
            err => {
            this.displayCheck = true;
                jQuery('#spinner').hide();
                alert('Error in search');
            });
    }
}
