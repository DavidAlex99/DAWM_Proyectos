import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CryptonewsComponent} from './components/cryptonews/cryptonews.component';
import {HeadlinesComponent} from './components/headlines/headlines.component';

const routes: Routes = [
  {path:'', component: HeadlinesComponent},
  {path:'technology', component: CryptonewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
