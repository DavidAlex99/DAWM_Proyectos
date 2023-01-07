import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CryptonewsComponent} from './components/cryptonews/cryptonews.component';
import {HeadlinesComponent} from './components/headlines/headlines.component';
import { GeneralComponent } from './components/general/general.component';

const routes: Routes = [
  {path:'', component: HeadlinesComponent},
  {path:'technology', component: CryptonewsComponent},
  { path: "general", component: GeneralComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
