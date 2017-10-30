import {Component, OnInit} from '@angular/core';
import {JsonReaderService} from "../shared/json-reader.service";
import {map} from "rxjs/operator/map";
import {RssInfoLocal} from "../shared/model/rss-info-local";

@Component({
  selector: 'app-rss-info',
  templateUrl: './rss-info.component.html',
  styleUrls: ['./rss-info.component.css']
})
export class RssInfoComponent implements OnInit {

  myjsondata: any;

  constructor(private jsonReaderService: JsonReaderService) {
  }

  ngOnInit() {
    this.jsonReaderService.getJsonData("assets/json/lk.json").subscribe((data) => {
      //console.log("what is in the data ", data);
      // this.myjsondata = data;
      console.log(data, typeof data);
      // this.myjsondata = data;

      let configs = [];
      for (let i = 0; i < data.info.length; i++) {
        const key = Object.keys(data.info[i]);
        const value = Object.values(data.info[i]);

       configs.push({
          'title': key[0],
          'info': value[0]
        });
      }

      this.myjsondata = configs;
    //  this.myjsondata = rssInfo;
    });
  }


}
