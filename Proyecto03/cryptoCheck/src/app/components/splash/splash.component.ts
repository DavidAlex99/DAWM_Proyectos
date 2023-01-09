import { Component, OnInit } from '@angular/core';
import { ApicoinService } from '../../services/apicoin.service';
import { NewsAPIService } from '../../services/news-api.service';
import { Coin } from '../../interface/coin';
import { Router } from '@angular/router';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit{
  coins: Coin[] = [];

  constructor(private apicoinService: ApicoinService, private router: Router){
  }

  ngOnInit(){
    this.apicoinService.obtenerDatosCoin().subscribe(respuesta => {
      this.coins = respuesta as Array<Coin>
      console.log(respuesta);
    })

    this.apicoinService.obtenerDatosCoin().subscribe(respuesta => {
      let apicoin = localStorage.getItem("articles");
      if(!apicoin){
        localStorage.setItem("articles", JSON.stringify(respuesta))
      }
    })

    setTimeout(() => {
      this.router.navigate(['general']);
    }, 2000);
  }

}