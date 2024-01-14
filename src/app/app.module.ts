import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourceComponent } from './home/resource/resource.component';
import { FormsModule } from '@angular/forms';
import { ReservationsComponent } from './home/reservations/reservations.component';
import { ProfileComponent } from './home/profile/profile.component';
import { TimeslotsComponent } from './home/timeslots/timeslots.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { BidiModule } from '@angular/cdk/bidi';


import { HomeComponent } from './home/home/home.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    ResourceComponent,
    ReservationsComponent,
    ProfileComponent,
    TimeslotsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ar', // Set the default language
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BidiModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
