import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http : HttpClient) { }
  getCountries(lang:string)
  {
    return this.http.get("https://restcountries.com/v3.1/lang/"+lang+"?fields=name");
  }
}
