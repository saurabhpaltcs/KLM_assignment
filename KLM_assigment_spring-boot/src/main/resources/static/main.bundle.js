webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"travel/assets/klm.png\" style=\"margin-left: 15px;\" alt=\"KLM Airlines\">\n<offers-root></offers-root>\n<statistics-request></statistics-request>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    ;
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_offers_shared_travel_service__ = __webpack_require__("./src/app/offers/shared/travel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_offers_offers_component__ = __webpack_require__("./src/app/offers/offers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_statistics_statistics_component__ = __webpack_require__("./src/app/statistics/statistics.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6_app_offers_offers_component__["a" /* OffersComponent */],
                __WEBPACK_IMPORTED_MODULE_7_app_statistics_statistics_component__["a" /* StatisticsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5_app_offers_shared_travel_service__["a" /* TravelService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/offers/offers.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-header\">\n    <div class=\"row header-bar\">\n        <h4 class=\"header-style\">Search flights</h4>\n    </div>\n    <div class=\"row\" style=\"margin-bottom:30px;margin-left:10px !important;\">\n        <div class=\"col-lg-3 col-sm-12 col-md-3 col-xs-12\">\n            <span>Origin :</span>\n            <div class=\"typeaheadMulti__container\">\n                <div class=\"typeaheadMulti__field\">\n                    <div class=\"typeaheadMulti__query\">\n                        <input class=\"form-control\" [(ngModel)]=\"source\" id=\"field1\" class=\"js-typeahead-country_v1\" name=\"field1\" type=\"search\"\n                            placeholder=\"type to search\" autocomplete=\"off\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-sm-12 col-md-3 col-xs-12\">\n            <span>Destination :</span>\n            <div class=\"typeaheadMulti__container\">\n                <div class=\"typeaheadMulti__field\">\n                    <div class=\"typeaheadMulti__query\">\n                        <input class=\"form-control\" [(ngModel)]=\"destination\" id=\"field2\" class=\"js-typeahead-country_v1\" name=\"field1\" type=\"search\"\n                            placeholder=\"type to search\" autocomplete=\"off\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <button type=\"submit\" (click)=\"onSearch()\" class=\"btn searchButton\"> Search </button>\n    </div>\n    <div style=\"margin-top:25px;margin-bottom:10px;\" class=\"row\" *ngIf=\"displayCheck\">\n        <span style=\"margin-left: 42px;font-family: initial;font-weight: bolder; font-size:large;\" *ngIf=\"farePrice== 0.0\">Flight not found on this route </span>\n        <span style=\"margin-left: 42px;font-family: initial;font-weight: bolder; font-size:large;\" *ngIf=\"farePrice >0.0\">Fare : {{farePrice}} {{farePriceCurrency}} </span>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/offers/offers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_offers_shared_travel_service__ = __webpack_require__("./src/app/offers/shared/travel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OffersComponent = /** @class */ (function () {
    function OffersComponent(travelService) {
        this.travelService = travelService;
        this.displayCheck = false;
        this.farePrice = 0.0;
        this.farePriceCurrency = '';
        this.destinationPlace = '';
        this.sourcePlace = '';
    }
    ;
    OffersComponent.prototype.ngOnInit = function () {
    };
    OffersComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery('#spinner').show();
        this.travelService.getLocations().subscribe(function (states) {
            console.log(states._embedded.locations);
            _this.locations = states._embedded.locations;
            jQuery('#spinner').hide();
            console.log(_this.locations);
            _this.field1 = jQuery('#field1');
            _this.field1.typeaheadMulti({
                order: "desc",
                minLength: 0,
                searchOnFocus: true,
                source: {
                    data: _this.locations
                },
                templateValue: "{{name}}",
                template: '<span>{{name}} - {{code}}</span>',
                display: ["name", "code"],
                emptyTemplate: "No data",
                callback: {
                    onInit: function (node) {
                        console.log('Typeahead Initiated on ' + node.selector);
                    },
                    onClickAfter: function (node, a, item, event) {
                        _this.sourcePlace = item.code;
                    }
                }
            });
            _this.field2 = jQuery('#field2');
            _this.field2.typeaheadMulti({
                order: "desc",
                minLength: 0,
                searchOnFocus: true,
                source: {
                    data: _this.locations
                },
                templateValue: "{{name}}",
                template: '<span>{{name}} - {{code}}</span>',
                display: ["name", "code"],
                emptyTemplate: "No data",
                callback: {
                    onInit: function (node) {
                        console.log('Typeahead Initiated on ' + node.selector);
                    },
                    onClickAfter: function (node, a, item, event) {
                        _this.destinationPlace = item.code;
                    }
                }
            });
        });
    };
    OffersComponent.prototype.onSearch = function (value) {
        var _this = this;
        if (!this.sourcePlace || this.sourcePlace == "") {
            alert("Please provide origin");
            return;
        }
        else if (!this.destinationPlace || this.destinationPlace == "") {
            alert("Please provide destinnation");
            return;
        }
        jQuery('#spinner').show();
        this.travelService.getFares(this.sourcePlace, this.destinationPlace).subscribe(function (item) {
            _this.displayCheck = true;
            _this.farePrice = item.amount;
            _this.farePriceCurrency = item.currency;
            jQuery('#spinner').hide();
        }, function (err) {
            _this.displayCheck = true;
            jQuery('#spinner').hide();
            alert('Error in search');
        });
    };
    OffersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'offers-root',
            template: __webpack_require__("./src/app/offers/offers.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_offers_shared_travel_service__["a" /* TravelService */]])
    ], OffersComponent);
    return OffersComponent;
}());



/***/ }),

/***/ "./src/app/offers/shared/travel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TravelService = /** @class */ (function () {
    function TravelService(http) {
        this.http = http;
    }
    TravelService.prototype.getLocations = function () {
        var url = '/travel/airports';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    TravelService.prototype.getFares = function (originCode, destinationCode) {
        var url = '/travel/fares/' + originCode + '/' + destinationCode;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    TravelService.prototype.getStatics = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].acuratorUrl + 'statics';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    TravelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TravelService);
    return TravelService;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"static-form-header\">\r\n    <div class=\"row static-header-bar\">\r\n        <h4 class=\"header-style\">Statistics </h4>\r\n\r\n    </div>\r\n\r\n   \r\n    <button type=\"submit\" (click)=\"getStatics()\" class=\"btn metricsButton\">Get Metrics</button>\r\n\r\n    <div style=\"margin-top:10px;\" *ngIf=\"staticsObj\">\r\n        <div>\r\n            <span class=\"metricsField\" *ngIf=\"!staticsObj.totalRequest\">Total No of Request : 0 </span>\r\n            <span class=\"metricsField\" *ngIf=\"staticsObj.totalRequest\">Total No of Request : {{staticsObj.totalRequest}} </span>\r\n        </div>\r\n        <div style=\"margin-top:5px\">\r\n            <span class=\"metricsField\" *ngIf=\"!staticsObj.status2xx\">Request in OK status : 0 </span>\r\n            <span class=\"metricsField\" *ngIf=\"staticsObj.status2xx\">Request in OK status : {{staticsObj.status2xx}} </span>\r\n        </div>\r\n        <div style=\"margin-top:5px\">\r\n            <span class=\"metricsField\" *ngIf=\"!staticsObj.status4xx\">Request in 4XX status : 0 </span>\r\n            <span class=\"metricsField\" *ngIf=\"staticsObj.status4xx\">Request in 4XX status : {{staticsObj.status4xx}} </span>\r\n        </div>\r\n        <div style=\"margin-top:5px\">\r\n            <span class=\"metricsField\" *ngIf=\"!staticsObj.status5xx\">Request in 5XX status : 0 </span>\r\n            <span class=\"metricsField\" *ngIf=\"staticsObj.status5xx\">Request in 5XX status : {{staticsObj.status5xx}} </span>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_offers_shared_travel_service__ = __webpack_require__("./src/app/offers/shared/travel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(travelService) {
        this.travelService = travelService;
    }
    ;
    StatisticsComponent.prototype.getStatics = function () {
        var _this = this;
        jQuery('#spinner').show();
        this.travelService.getStatics().subscribe(function (item) {
            _this.staticsObj = item;
            jQuery('#spinner').hide();
        }, function (err) {
            jQuery('#spinner').hide();
            alert('Error in search');
        });
    };
    StatisticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'statistics-request',
            template: __webpack_require__("./src/app/statistics/statistics.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_offers_shared_travel_service__["a" /* TravelService */]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    acuratorUrl: "http://localhost:4200/travel/"
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map