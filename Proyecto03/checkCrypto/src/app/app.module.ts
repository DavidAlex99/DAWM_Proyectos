import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneralComponent } from './components/general/general.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { EarnComponent } from './components/earn/earn.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    BusquedaComponent,
    NoticiasComponent,
    EarnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
