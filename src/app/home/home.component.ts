import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cityText: string;

  constructor() { }

  ngOnInit() {

    //	For images only
    $('.flexslider').flexslider({
      controlNav: false
    });

    this.cityText = "Sample text for selected city";
  }

}
