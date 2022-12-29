import { Component } from '@angular/core';

import { ServicioService } from './services/servicio.service';

import { General } from './interfaces/general';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'checkCrypto';

  infoGeneral: General[] = [];
  // infoNews: Noticias[] = [];

  constructor(private servicioService: ServicioService) {

    servicioService.obtenerDatosCoin().subscribe(respuesta1 => {
      this.infoGeneral = respuesta1 as Array<General>
      // console.log(this.infoGeneral);
    })

    // servicioService.obtenerDatosNoticia().subscribe(respuesta2 => {
    //   this.infoNews = respuesta2 as Array<Noticias>
    // })
  } 
}
