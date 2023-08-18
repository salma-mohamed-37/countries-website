import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CountryComponent } from './components/country/country.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule, }  from'@angular/common/http';

@NgModule({
  declarations: [
    HomePageComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CountriesModule { }
