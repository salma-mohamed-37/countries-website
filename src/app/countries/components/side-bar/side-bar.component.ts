import { Component } from '@angular/core';

interface Link
{
  url:string;
  title:string;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  links:Link[] = [
    {
      url:"/country",
      title:"Get country details by name"
    },
    {
      url:"/country",
      title:"Get country details by name"
    },
    {
      url:"/country",
      title:"Get country details by name"
    },
    {
      url:"/country",
      title:"Get country details by name"
    }

  ]
}
