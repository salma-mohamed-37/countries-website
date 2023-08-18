import { Component } from '@angular/core';
import { CountryService } from './country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  country :string ="";
  response : any;
  currencies :any[]=[];
  continents :any[]=[];
  capital :any;
  flag :any;
  languages :any[] =[];
  map: any;

  constructor(private service : CountryService){}
  onsubmit()
  {
    this.service.getCountry(this.country).subscribe(res=>
      {
        console.log("received");
        this.response = res;
        this.response = this.response[0];
        this.currencies = Object.values(this.response.currencies);
        this.capital = Object.values(this.response.capital);
        this.continents = Object.values(this.response.continents);
        this.flag = this.response.flags.png;
        this.languages = Object.values(this.response.languages);
        this.map =  this.response.maps.googleMaps;

      });
  }

}
