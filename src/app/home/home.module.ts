import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {RssInfoModule} from "../rss-info/rss-info.module";

@NgModule({
  imports: [
    CommonModule,
    RssInfoModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule {
}
