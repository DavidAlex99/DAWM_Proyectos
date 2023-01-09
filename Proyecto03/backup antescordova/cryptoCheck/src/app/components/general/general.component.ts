import { Component } from '@angular/core'; 

import { ApicoinService } from '../../services/apicoin.service';

import { Coin } from '../../interface/coin';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
  coins: Coin[] = [];

  constructor(private apicoinService: ApicoinService){

    apicoinService.obtenerDatosCoin().subscribe(respuesta => {
      this.coins = respuesta as Array<Coin>
      console.log(respuesta);
    })

  }
}