import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //	For images only
    $('.flexslider').flexslider({
      controlNav: false
    });
  }

}
