import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RssInfoComponent} from "./rss-info.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RssInfoComponent],
  declarations: [RssInfoComponent]
})
export class RssInfoModule {
}
