import { Component } from '@angular/core';

import { ServicioService } from '../../services/servicio.service';

import { Noticias } from '../../interfaces/noticias';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})

export class NoticiasComponent {

  infoNews: Noticias[] = [];

  constructor(private servicioService: ServicioService) {

    servicioService.obtenerDatosNoticia().subscribe(respuesta2 => {

      // for(var i in respuesta2){
      //   this.infoNews.push(respuesta2[i])
      // }

      this.infoNews = respuesta2 as Array<Noticias>;
      console.log(this.infoNews);

      
    })

  }

}
