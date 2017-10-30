import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeModule} from "./home/home.module";
import {ToursModule} from "./tours/tours.module";
import {ContactModule} from "./contact/contact.module";
import {AboutModule} from "./about/about.module";
import {Routes, RouterModule} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {ToursComponent} from "./tours/tours.component";
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PageNotFoundModule} from "./page-not-found/page-not-found.module";
import {JsonReaderService} from "./shared/json-reader.service";
import {RssInfoModule} from "./rss-info/rss-info.module";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'tours', component: ToursComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    ToursModule,
    ContactModule,
    AboutModule,
    RssInfoModule,
    PageNotFoundModule
  ],
  providers: [
    JsonReaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
