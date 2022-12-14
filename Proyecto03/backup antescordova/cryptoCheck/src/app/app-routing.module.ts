import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptonewsComponent } from './components/cryptonews/cryptonews.component';
import { HeadlinesComponent } from './components/headlines/headlines.component';
import { GeneralComponent } from './components/general/general.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { EarnComponent } from './components/earn/earn.component';
import { SplashComponent } from './components/splash/splash.component';

const routes: Routes = [
  {path: "splash",component: SplashComponent},
  {path: "cryptonews", component: HeadlinesComponent},
  {path: "general", component: GeneralComponent },
  {path: "earn", component: EarnComponent },
  {path: "busqueda", component: BusquedaComponent},
  {path: "**", redirectTo: 'splash'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
