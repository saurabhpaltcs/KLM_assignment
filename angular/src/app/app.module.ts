import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TravelService } from 'app/offers/shared/travel.service';
import { OffersComponent } from 'app/offers/offers.component';
import { StatisticsComponent } from 'app/statistics/statistics.component';
@NgModule({
    declarations: [
        AppComponent,
        OffersComponent,
        StatisticsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule, ReactiveFormsModule,
        HttpModule
    ],
    providers: [TravelService],
    bootstrap: [AppComponent]
})
export class AppModule { }