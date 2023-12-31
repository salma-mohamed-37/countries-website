import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CountryComponent } from './components/country/country.component';
import { LanguageComponent } from './components/language/language.component';

const routes :Routes =[
  {
    path : '',
    component : HomePageComponent,
  },
  {
    path:'country',
    component : CountryComponent
  },
  {
    path:'language',
    component : LanguageComponent
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class CountriesRoutingModule { }
