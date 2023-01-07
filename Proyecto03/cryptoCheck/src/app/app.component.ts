import { Component } from '@angular/core';
import { ApicoinService} from './services/apicoin.service'
import {Coin} from './interface/coin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cryptoCheck';

  coins: Coin[] = [];

  constructor(private apicoinService: ApicoinService) {

    apicoinService.obtenerDatosCoin().subscribe(respuesta=> {
      this.coins = respuesta as  Array<Coin>
    })

  }


}
