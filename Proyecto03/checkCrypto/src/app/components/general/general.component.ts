import { Component } from '@angular/core';

import { ServicioService } from '../../services/servicio.service';

import { General } from '../../interfaces/general';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
  title = 'checkCrypto';

  infoGeneral: General[] = [];
  // infoNews: Noticias[] = [];

  constructor(private servicioService: ServicioService) {

    servicioService.obtenerDatosCoin().subscribe(respuesta1 => {
      this.infoGeneral = respuesta1 as Array<General>
    })

    // servicioService.obtenerDatosNoticia().subscribe(respuesta2 => {
    //   this.infoNews = respuesta2 as Array<Noticias>
    // })
  }
}
