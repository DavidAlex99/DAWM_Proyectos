import { Component } from '@angular/core';

import { ServicioService } from '../../services/servicio.service';

import { Article } from '../../interfaces/article';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})

export class NoticiasComponent {

  infoNews: Article[] = [];

  constructor(private servicioService: ServicioService) {

    servicioService.obtenerDatosNoticia().subscribe(respuesta2 => {

      // for(var i in respuesta2){
      //   this.infoNews.push(respuesta2[i])
      // }

      this.infoNews = respuesta2 as Array<Article>;
      console.log(this.infoNews);

      
    })
  }

}
