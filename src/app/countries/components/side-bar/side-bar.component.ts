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
  display:any;
  up:any;
  down:any;
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

  expand()
  {
    this.display ="block";
    this.down="none";
    this.up="inline";
    console.log("e")
  }

  collapse()
  {
    this.display="none";
    this.down="inline";
    this.up="none";
    console.log("c")
  }
}
