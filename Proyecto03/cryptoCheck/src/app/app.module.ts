import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlinesComponent } from './components/headlines/headlines.component';
import { CryptonewsComponent } from './components/cryptonews/cryptonews.component';

import {NewsAPIService} from './services/news-api.service';
import {HttpClientModule} from '@angular/common/http';
import { GeneralComponent } from './components/general/general.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import {FormsModule} from '@angular/forms';
import { EarnComponent } from './components/earn/earn.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadlinesComponent,
    CryptonewsComponent,
    GeneralComponent,
    BusquedaComponent,
    EarnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
