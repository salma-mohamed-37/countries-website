import { Component } from '@angular/core';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  lang :string="";
  countries: any[] =[];
  errorMessage:any;

  constructor(private service : LanguageService){}

  onsubmit()
  {
      if(this.lang != "")
      {
        this.errorMessage="";

        this.service.getCountries(this.lang).subscribe({
          next: (res)=>{
            console.log("received");
            this.countries =Object.values(res);
          },
          error:(err)=>{
            console.log('handle error');
            this.errorMessage = "This language is not the official language of any country";
            this.countries=[];
          }
        })
      }
      else
      {
        this.errorMessage="Please enter a language";
        this.countries=[];
      }
  }

}
