import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { EarnComponent } from './components/earn/earn.component';
import { GeneralComponent } from './components/general/general.component';
import { NoticiasComponent } from './components/noticias/noticias.component';


const routes: Routes = [
  { path: "busqueda", component: BusquedaComponent },
  { path: "earn", component: EarnComponent },
  { path: "general", component: GeneralComponent },
  { path: "noticias", component: NoticiasComponent },
  { path: "**", redirectTo: "general" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
