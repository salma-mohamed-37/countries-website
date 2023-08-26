import { Component } from '@angular/core';
import { CountryService } from './country.service';

interface Record
{
  common:any;
  official:any;
  currencies :any[];
  continents :any[];
  capital :any;
  flag :any;
  languages :any[];
  map: any;
}

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  record !: Record;
  country :string ="";
  response : any;
  currencies :any[]=[];
  continents :any[]=[];
  capital :any;
  flag :any="";
  languages :any[] =[];
  map: any;
  errorMessage:any;
  background:any="{background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(assets/fullbackground.jpg);}";

  constructor(private service : CountryService){}

  onsubmit()
  {
    if(this.country != "")
    {
      this.errorMessage="";
      this.service.getCountry(this.country).subscribe(res =>
      {
        console.log("received");
        this.response =res;
        this.response = this.response[0];
        this.record  =
        {
          common: this.response.name.common ,
          official:this.response.name.official ,
          currencies :Object.values(this.response.currencies),
          continents :Object.values(this.response.continents),
          capital :Object.values(this.response.capital),
          flag :this.response.flags.png,
          languages :Object.values(this.response.languages),
          map: this.response.maps.googleMaps
        };
        this.background ="{background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),"+this.flag+";}";

      }, error => {
      console.log('handle error');
      this.errorMessage = "No country with this name";
      this.response=null;
      }
    );

    }
    else
    {
      this.errorMessage = "Please enter the name of the country";
      this.response=null;
    }

  }
}
